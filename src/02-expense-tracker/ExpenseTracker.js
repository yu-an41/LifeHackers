import React, { useState } from 'react'

import styles from './ExpenseTracker.module.scss'
import Expenses from './Expenses'
import ExpenseItem from './ExpenseItem'
import ExpenseCard from './ExpenseCard'
import ExpensesFilter from './ExpensesFilter'
import NewExpense from './NewExpense'

const DUMMY_EXPENSE = [
  { title: 'Fried rice', date: new Date(2021, 12, 23), amount: 75 },
  { title: 'Bubble tea', date: new Date(2022, 12, 22), amount: 80 },
  { title: 'Bubble tea', date: new Date(2022, 12, 21), amount: 105 },
  { title: 'Bubble tea', date: new Date(2022, 12, 20), amount: 50 },
]

function ExpenseTracker(propss) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  const [filteredYear, setFilteredYear] = useState('2022')

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense]
    })
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div className={styles.expenseTrackerPage}>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <Expenses items={expenses} /> */}
      <ExpenseCard>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <div className={styles.expenseItemWrap}>
          {/* <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          /> */}
          {propss.items.map((expense) => (
            <ExpenseItem
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))}
        </div>
      </ExpenseCard>
    </div>
  )
}

export default ExpenseTracker
