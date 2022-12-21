// plugins & extensions
import React, { useState, useReducer } from 'react'

// import './ToDoList.scss'

const reducer = (todos, action) => {
  console.log(todos, action)
  switch (action.type) {
    case 'ADD':
      return [
        ...todos,
        { toDoContent: action.payload.toDoContent, complete: false },
      ]
  }
}
function ToDoList() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [toDoContent, SetToDoContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD', payload: { toDoContent: toDoContent } })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={toDoContent}
          onChange={(e) => {
            SetToDoContent(e.target.value)
          }}
          placeholder="Type in something..."
        />
      </form>

      {todos.map((todo) => {})}
    </div>
  )
}

export default ToDoList
