import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import ToDoList from './01-to-do-list/ToDoList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
