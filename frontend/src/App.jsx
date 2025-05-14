import { Routes, Route } from 'react-router'
import { DashBoard } from './routes/Dashboard/DashBoard.jsx'
import { LandingPage } from './routes/LandingPage/LandingPage.jsx'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'

function App () {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/home' element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
