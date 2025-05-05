import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
