import React from 'react'
import { ACTIONS } from './Actions'
import './ToDo.scss'

const ToDo = ({ todo, dispatch, index }) => {
  return (
    <div className="todo">
      <span className="todo-index">{index}. </span>
      <span
        className="todo-detail"
        style={{ textDecoration: todo.complete ? 'line-through' : null }}
        onClick={() => {
          // dispatch({ type: ACTIONS.EDIT, payload: { id: todo.id } })
        }}
      >
        {todo.toDoContent}
      </span>
      <button
        className="toggle my-btn"
        onClick={() => {
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }}
      >
        {todo.complete ? 'Cancel' : 'Complete'}
      </button>
      <button
        className="delete my-btn"
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
