import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from 'react-router-dom'
// pages
import Homepage from './00-homepage/Homepage'

function App() {
  return (
    <>
      <Homepage />
      <p>WELCOME TO LIFEHCKERS!</p>
    </>
  )
}

export default App
