import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={isOpen ? 'sidebar active' : 'sidebar'}>
      <div className="side-left">
        <div className="close-icon">
          <FaTimes onClick={toggle} />
        </div>
        <ul>
          <li>
            <Link className="link-items" onClick={toggle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-items" onClick={toggle} to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="side-right" onClick={toggle}></div>
    </aside>
  )
}

export default Sidebar
