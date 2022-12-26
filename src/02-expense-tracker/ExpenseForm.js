import React, { useState } from 'react'

import styles from './ExpenseForm.module.scss'

export default function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value }
    // })
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value }
    // })
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value }
    // })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    onSaveExpenseData(expenseData)
    console.log(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles.newExpenseControl}>
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles.newExpenseControl}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
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
