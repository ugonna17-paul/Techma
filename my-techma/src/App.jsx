import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Landing-page/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About-us/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      <About />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
