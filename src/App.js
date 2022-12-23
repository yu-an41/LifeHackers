import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import Homepage from './00-homepage/Homepage'
import ToDoList from './01-to-do-list/ToDoList'
import ExpenseTracker from './02-expense-tracker/ExpenseTracker'

function App() {
  return (
    <Homepage />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/todo" element={<ToDoList />} />
    //     <Route path="/expense" element={<ExpenseTracker />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
