import './Styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Layouts/Header/Index'
import Hmain from './Layouts/Home/Index'
import Footer from './Layouts/Footer/Index'

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
              <Footer />
            </>
          }
        />
        <Route
          path='/shop'
          element={
            <>
              <Header />
              <Hmain />
              <Footer />
            </>
          }
        />
        <Route
          path='/help'
          element={
            <>
              <Header />
              <Hmain />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
