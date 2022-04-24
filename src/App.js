import './Styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Layouts/Header/Index'
import Hmain from './Layouts/Home/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Hmain />
            </>
          }
        />
        <Route
          path='/shop'
          element={
            <>
              <Header />
              <Hmain />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
