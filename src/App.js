import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import ToDoList from './01-to-do-list/ToDoList'
import ExpenseItem from './02-expense-tracker/ExpenseItem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/expense" element={<ExpenseItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
