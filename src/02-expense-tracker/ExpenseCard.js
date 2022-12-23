import React from 'react'
import './ExpenseCard.scss'

function ExpenseCard(props) {
  return <div className="expense-card">{props.children}</div>
}

export default ExpenseCard
