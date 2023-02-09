import React from 'react'
import styles from './ExpensesFilter.module.scss'

export default function ExpensesFilter({ selected, onChangeFilter }) {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value)
  }

  return (
    <div className={styles.ExpensesFilter}>
      <div className={styles.expensesFilterControl}>
        <label className={styles.expensesFilterLabel}>Filter by year</label>
        <select
          className={styles.expensesFilterSelect}
          value={selected}
          onChange={dropdownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}
