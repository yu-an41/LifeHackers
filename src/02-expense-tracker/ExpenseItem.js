import React from 'react'
import './ExpenseItem.scss'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-date">December 22nd 2022</div>
      <div className="expense-description">
        <div className="expense-title">Bubble tea</div>
        <div className="expense-amount">$ 75</div>
      </div>
    </div>
  )
}

export default ExpenseItem
