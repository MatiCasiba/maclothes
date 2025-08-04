import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
