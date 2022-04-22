import './Styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Layouts/Header/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
