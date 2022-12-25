import React from 'react'

import ExpenseForm from './ExpenseForm'

import styles from './NewExpense.module.scss'

export default function NewExpense() {
  return (
    <div className={styles.newExpense}>
      <ExpenseForm />
    </div>
  )
}
