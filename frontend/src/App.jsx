import { Routes, Route } from 'react-router'
import { DashBoard, LandingPage } from './pages/index.js'
import './App.css'

function App () {
  return (
    <>
      <Routes>
        <Route path='/home' element={<DashBoard />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
