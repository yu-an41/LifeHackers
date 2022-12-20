// plugins & extensions
import React, { useState, useReducer } from 'react'

// import './ToDoList.scss'

function ToDoList() {
  const [toDoList, SetToDoList] = useState('')

  return (
    <div>
      <form>
        <input
          type="text"
          value={toDoList}
          onChange={(e) => {
            SetToDoList()
          }}
          placeholder="Type in something..."
        />
      </form>
    </div>
  )
}

export default ToDoList
