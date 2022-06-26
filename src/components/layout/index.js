import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {children}
    </>
  )
}

export default Layout
