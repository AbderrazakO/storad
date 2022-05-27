import './Styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Layouts/Header/Index'
import Home from './Layouts/Home/Index'
import Shop from './Layouts/Shop/Index'
import Footer from './Layouts/Footer/Index'
import About from './Layouts/About/index'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import reducer from './Redux/reducer'
import initialState from './Redux/initialState'

function App() {
  const data = createStore(reducer, initialState)
  return (
    <Provider store={data}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header obj={['active', '', '']} />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path='/shop'
            element={
              <>
                <Header obj={['', 'active', '']} />
                <Shop />
                <Footer />
              </>
            }
          />
          <Route
            path='/about'
            element={
              <>
                <Header obj={['', '', 'active']} />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
