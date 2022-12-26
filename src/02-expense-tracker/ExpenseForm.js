import React, { useState } from 'react'

import styles from './ExpenseForm.module.scss'

export default function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }
  return (
    <form>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className={styles.newExpenseControl}>
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles.newExpenseControl}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles.newExpenseActions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
