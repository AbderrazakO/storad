import './Styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Layouts/Header/Index'
import Home from './Layouts/Home/Index'
import Shop from './Layouts/Shop/Index'
import Footer from './Layouts/Footer/Index'
import About from './Layouts/About/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path='/shop'
          element={
            <>
              <Header />
              <Shop />
              <Footer />
            </>
          }
        />
        <Route
          path='/about'
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
