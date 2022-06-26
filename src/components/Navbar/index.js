import React from 'react'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCart } from '../../features/cartSlice'
import './Navbar.css'

const Navbar = ({ toggle }) => {
  const items = useSelector(selectCart)

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="bar-icon">
          <FaBars onClick={toggle} />
        </div>
        <div className="logo">
          <h1>Shop</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <Link className="link-items" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-items" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
        <Link className="link-items" to="/Cart">
          <button className="cart-btn">
            <FaShoppingCart />
            {items.cartTotalQuantity === 0 || (
              <span>{items.cartTotalQuantity}</span>
            )}
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
