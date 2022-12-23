import React from 'react'

import './ExpenseDate.scss'

function ExpenseDate({ date }) {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()
  return (
    <div className="expense-date">
      <div className="expense-date-details expense-date-month">{month}</div>
      <div className="expense-date-details expense-date-year">{year}</div>
      <div className="expense-date-details expense-date-day">{day}</div>
    </div>
  )
}

export default ExpenseDate
