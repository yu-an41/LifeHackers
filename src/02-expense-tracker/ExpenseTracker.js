import React, { useState } from 'react'

import styles from './ExpenseTracker.module.scss'
import Expenses from './Expenses'
import ExpenseItem from './ExpenseItem'
import ExpenseCard from './ExpenseCard'
import ExpensesFilter from './ExpensesFilter'
import NewExpense from './NewExpense'

function ExpenseTracker() {
  const expenses = [
    { title: 'Fried rice', date: new Date(2021, 12, 23), amount: 75 },
    { title: 'Bubble tea', date: new Date(2022, 12, 22), amount: 80 },
    { title: 'Bubble tea', date: new Date(2022, 12, 21), amount: 105 },
    { title: 'Bubble tea', date: new Date(2022, 12, 20), amount: 50 },
  ]
  const addExpenseHandler = (expense) => {
    console.log(expenses)
  }

  const [filteredYear, setFilteredYear] = useState('2022')

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
          <ExpenseItem
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
            items={expenses}
          />
        </div>
        <div className={styles.expenseItemWrap}>
          <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date}
          />
        </div>
        <div className={styles.expenseItemWrap}>
          <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date}
          />
        </div>
      </ExpenseCard>
    </div>
  )
}

export default ExpenseTracker
