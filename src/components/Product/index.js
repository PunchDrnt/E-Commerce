import React, { useState } from 'react'
import { products } from '../data'
import { FaSearch } from 'react-icons/fa'
import Card from './card'
import './Product.css'

const Products = () => {
  const [isSearch, setIsSearch] = useState('')

  return (
    <div className="product-container">
      <div className="product-wrapper">
        <div className="search-bar">
          <input
            className="search"
            type="text"
            placeholder="Search..."
            onChange={(e) => setIsSearch(e.target.value)}
          ></input>
          <FaSearch />
        </div>
        <div className="product-wrap">
          {products
            .filter((products) =>
              products.name.toLowerCase().includes(isSearch)
            )
            .map((products) => (
              <Card key={products.id} {...products} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Products
