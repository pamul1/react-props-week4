import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './ScreenComponents/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/'  element={<Home />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
