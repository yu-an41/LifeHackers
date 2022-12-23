import React from 'react'
import dayjs from 'dayjs'

import './ExpenseItem.scss'

function ExpenseItem() {
  const expenseDate = new Date(2022, 12, 22).toISOString()
  const expenseTitle = 'Bubble tea'
  const expenseAmount = 75

  return (
    <div className="expense-item">
      <div className="expense-date">{expenseDate}</div>
      <div className="expense-description">
        <p className="expense-title">{expenseTitle}</p>
        <p className="expense-amount">$ {expenseAmount}</p>
      </div>
    </div>
  )
}

export default ExpenseItem
