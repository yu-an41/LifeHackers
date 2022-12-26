import React from 'react'

import ExpenseForm from './ExpenseForm'

import styles from './NewExpense.module.scss'

export default function NewExpense({ onAddExpense }) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100000).toString(),
    }
    onAddExpense(expenseData)
  }

  return (
    <div className={styles.newExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
