/* eslint-disable default-case */
// plugins & extensions
import React, { useState, useReducer } from 'react'
import ToDo from './ToDo'
import { ACTIONS } from './Actions'
import './ToDoList.scss'

const reducer = (todos, action) => {
  // console.log(todos, action)
  const { toDoContent, id } = action.payload
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(toDoContent)]
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== id)
    default:
      return todos
  }
}

const newTodo = (toDoContent) => {
  return {
    id: Math.floor(Math.random() * 100000),
    toDoContent,
    complete: false,
  }
}
function ToDoList() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [toDoContent, SetToDoContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (toDoContent.trim()) {
      dispatch({ type: ACTIONS.ADD, payload: { toDoContent: toDoContent } })
    }
    SetToDoContent('')
  }

  return (
    <div className="todo-container">
      <form>
        <input
          type="text"
          value={toDoContent}
          onChange={(e) => {
            SetToDoContent(e.target.value)
          }}
          placeholder="Type in something..."
        />
        <button type="submit" onClick={handleSubmit}>
          送出
        </button>
      </form>

      {todos.map((todo) => {
        return <ToDo todo={todo} dispatch={dispatch} />
      })}
    </div>
  )
}

export default ToDoList
