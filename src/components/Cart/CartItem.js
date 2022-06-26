import React from 'react'
import {
  addToCart,
  decreaseQuantity,
  removeCartItem,
} from '../../features/cartSlice'
import { useDispatch } from 'react-redux'
import './Cart.css'

const CartItem = (item) => {
  const dispatch = useDispatch()

  const handleIncreaseToCart = (item) => {
    dispatch(addToCart(item))
  }
  const handleDecreaseToCart = (item) => {
    dispatch(decreaseQuantity(item))
  }
  const handleRemoveCartItem = (item) => {
    dispatch(removeCartItem(item))
  }

  return (
    <div className="cart-item">
      <div className="cart-product">
        <img src={item.img} alt="Product" type="image/webp" />
        <div>
          <div>
            <h3>{item.name}</h3>
            <p>{item.spec}</p>
          </div>
          <button onClick={() => handleRemoveCartItem(item)}>Remove</button>
        </div>
      </div>
      <div className="cart-product-price">{item.price}.-</div>
      <div className="cart-product-quantity">
        <button onClick={() => handleDecreaseToCart(item)}>-</button>
        <div className="quantity">{item.cartQuantity}</div>
        <button onClick={() => handleIncreaseToCart(item)}>+</button>
      </div>
      <div className="cart-product-total-price">
        {item.price * item.cartQuantity}.-
      </div>
    </div>
  )
}

export default CartItem
