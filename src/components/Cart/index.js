import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCart, clearCart, getTotals } from '../../features/cartSlice'
import CartItem from './CartItem'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
  const items = useSelector(selectCart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [items, dispatch])

  const handleClearCart = (item) => {
    dispatch(clearCart(item))
  }
  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="titles">
          <h3 className="product-title">Product</h3>
          <h3 className="price">Price</h3>
          <h3 className="quantity">Quantity</h3>
          <h3 className="total">Total</h3>
        </div>
        {items.cartItems.map((items) => (
          <CartItem key={items.id} {...items} />
        ))}
        <div className="cart-summary">
          <button className="clear-btn" onClick={() => handleClearCart(items)}>
            Clear Cart
          </button>
          <div className="cart-checkout">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>{items.cartTotalAmount}.-</span>
            </div>
            <p>Taxes and shipping not includes</p>
            <button className="checkout-btn">Check out</button>
            <Link className="link-item" to="/">
              <p>Back to shopping</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
