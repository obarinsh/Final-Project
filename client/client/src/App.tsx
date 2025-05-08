import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Game from './components/Game'
import MainMenu from './components/MainMenu'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<LogIn />} />
        <Route path="/categories" element={<MainMenu />} />
        <Route path="/game/:categoryId/:name" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
