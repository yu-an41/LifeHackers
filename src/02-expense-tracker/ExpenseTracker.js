import React from 'react'

import './ExpenseTracker.scss'

import ExpenseItem from './ExpenseItem'

function ExpenseTracker() {
  const expenses = [
    { title: 'Bubble tea', date: new Date(2022, 12, 23), amount: 75 },
    { title: 'Bubble tea', date: new Date(2022, 12, 22), amount: 80 },
    { title: 'Bubble tea', date: new Date(2022, 12, 21), amount: 105 },
    { title: 'Bubble tea', date: new Date(2022, 12, 20), amount: 50 },
  ]
  return (
    <div className="expense-tracker-page">
      <div className="expense-item-wrap">
        {expenses.map((e, i) => {
          return <ExpenseItem />
        })}
      </div>
    </div>
  )
}

export default ExpenseTracker
