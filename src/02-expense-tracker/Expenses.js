import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpenseCard from './ExpenseCard'
import ExpensesFilter from './ExpensesFilter'

import styles from './Expenses.module.scss'

function Expenses(items) {
  return (
    <div>
      <ExpenseCard classname="expenses">
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
