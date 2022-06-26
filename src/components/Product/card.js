import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, getTotals } from '../../features/cartSlice'
import './Product.css'

const Card = (item) => {
  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    dispatch(getTotals())
  }
  return (
    <div className="products-card">
      <img
        className="product-image"
        src={item.img}
        type="image/webp"
        alt="Hardware"
      />
      <div className="product-name">{item.name}</div>
      <div className="product-spec">{item.spec}</div>
      <div className="product-price">{item.price}.-</div>
      <button className="buy-btn" onClick={() => handleAddToCart(item)}>
        Add to cart
      </button>
    </div>
  )
}

export default Card
