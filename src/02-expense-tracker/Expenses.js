import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpenseCard from './ExpenseCard'
import ExpensesFilter from './ExpensesFilter'

import styles from './Expenses.module.scss'

function Expenses(items) {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <div>
      <ExpenseCard classname="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {items.map((expense) => (
          <Expenses
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ExpenseCard>
    </div>
  )
}

export default Expenses
