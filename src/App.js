import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Layout from './components/layout'
import Contact from './pages/Contact'
import Cart from './pages/CartPage'
import Notfound from './pages/404'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Contact" element={<Contact />} exact />
            <Route path="/Cart" element={<Cart />} exact />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
