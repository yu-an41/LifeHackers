import React from 'react'
import styles from './ExpensesFilter.module.scss'

export default function ExpensesFilter({ selected, onChangeFilter }) {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value)
  }

  return (
    <div className="expensesFilter">
      <div className="expensesFilterControl">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}
