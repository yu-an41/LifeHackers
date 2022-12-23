import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// components
import ToDoList from '../01-to-do-list/ToDoList'
import ExpenseTracker from '../02-expense-tracker/ExpenseTracker'

// styles and imgs
import './Homepage.scss'

function Homepage() {
  const navigate = useNavigate()
  return (
    <div className="homepage-container">
      <div className="homehomepagepae-navbar">
        <p>navbar</p>
      </div>
      <div className="homepage-main">
        <div className="hompage-tabs">
          <button>
            <Link to="/todo">找待辦</Link>
          </button>
          <br />
          <button>
            <Link to="/expense">找記帳</Link>
          </button>
        </div>
      </div>
      <div className="homepage-footer">
        <p>footer</p>
      </div>
    </div>
  )
}

export default Homepage
