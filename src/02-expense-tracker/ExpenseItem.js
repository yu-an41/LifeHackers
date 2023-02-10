import React, { useState } from 'react'
import dayjs from 'dayjs'

import ExpenseDate from './ExpenseDate'
import styles from './ExpenseItem.module.scss'

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title)
  // const clickHandler = () => {
  //   setTitle('Updated!')
  //   console.log(title)
  // }

  return (
    <div className={styles.expenseItem}>
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className={styles.expenseDescription}>
        <h2 className={styles.expenseTitle}>{props.title}</h2>
        <p className={styles.expenseAmount}>$ {props.amount}</p>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </div>
  )
}

export default ExpenseItem
