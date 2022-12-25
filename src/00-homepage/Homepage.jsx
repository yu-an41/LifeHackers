import React, { useState } from 'react'

// components
import { AppList } from './AppList'
// import ToDoList from '../01-to-do-list/ToDoList'
// import ExpenseTracker from '../02-expense-tracker/ExpenseTracker'

// styles and imgs
import styles from './Homepage.module.scss'

function Homepage() {
  const [displayIndex, setDispaplyIndex] = useState(0)

  // const AppList = [
  //   {
  //     name: '待辦小管家',
  //     path: '../01-to-do-list/ToDoList',
  //     component: ToDoList,
  //   },
  //   {
  //     name: '記帳小幫手',
  //     path: '../02-expense-tracker/ExpenseTracker',
  //     component: ExpenseTracker,
  //   },
  // ]

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        setDispaplyIndex(e.target.value)
      }}
    >
      {AppList.map((v, i) => {
        return (
          <option key={i} value={i}>
            {v.name}
          </option>
        )
      })}
    </select>
  )

  const MyComponent = AppList[displayIndex].component
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageNavbar}>
        <p>navbar</p>
      </div>
      <div className={styles.homepageMain}>
        <div className="hompage-tabs">{selection}</div>
        <div className="hompage-body">
          <MyComponent />
        </div>
      </div>
      <div className={styles.homepageFooter}>
        <p>footer</p>
      </div>
    </div>
  )
}

export default Homepage
