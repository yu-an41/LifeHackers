import React from 'react'
import dayjs from 'dayjs'

import ExpenseDate from './ExpenseDate'
import './ExpenseItem.scss'

function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-description">
        <p className="expense-title">{title}</p>
        <p className="expense-amount">$ {amount}</p>
      </div>
    </div>
  )
}

export default ExpenseItem
