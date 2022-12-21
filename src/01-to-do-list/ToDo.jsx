import React from 'react'
import { ACTIONS } from './Actions'
// import './ToDo.scss'

const ToDo = ({ todo, dispatch }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.complete ? 'line-through' : null }}>
        {todo.toDoContent}
      </span>
      <button
        className="toggle"
        onClick={() => {
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }}
      >
        {todo.complete ? 'Cancel' : 'Complete'}
      </button>
      <button
        className="delete"
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default ToDo
