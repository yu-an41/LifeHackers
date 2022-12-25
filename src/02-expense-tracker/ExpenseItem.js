import React from 'react'
import dayjs from 'dayjs'

import ExpenseDate from './ExpenseDate'
import styles from './ExpenseItem.module.scss'

function ExpenseItem({ title, amount, date }) {
  return (
    <div className={styles.expenseItem}>
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className={styles.expenseDescription}>
        <p className={styles.expenseTitle}>{title}</p>
        <p className={styles.expenseAmount}>$ {amount}</p>
      </div>
    </div>
  )
}

export default ExpenseItem
