import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
        toast.info('Increase product quantity', {
          position: 'bottom-left',
          autoClose: 1000,
          pauseOnHover: false,
          draggable: true,
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success('Add new product to cart', {
          position: 'bottom-left',
          autoClose: 1000,
          pauseOnHover: false,
          draggable: true,
        })
      }
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
        toast.info('Decrease product quantity', {
          position: 'bottom-left',
          autoClose: 1000,
          pauseOnHover: false,
          draggable: true,
        })
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const newCart = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )
        toast.info('Remove product from cart', {
          position: 'bottom-left',
          autoClose: 1000,
          pauseOnHover: false,
          draggable: true,
        })
        state.cartItems = newCart
      }
    },
    removeCartItem(state, action) {
      const newCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
      toast.info('Remove product from cart', {
        position: 'bottom-left',
        autoClose: 1000,
        pauseOnHover: false,
        draggable: true,
      })
      state.cartItems = newCart
    },
    clearCart(state) {
      state.cartItems = []
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotals, cartItem) => {
          const { price, cartQuantity } = cartItem
          const itemTotal = price * cartQuantity

          cartTotals.total += itemTotal
          cartTotals.quantity += cartQuantity

          return cartTotals
        },
        {
          total: 0,
          quantity: 0,
        }
      )
      state.cartTotalAmount = total
      state.cartTotalQuantity = quantity
    },
  },
})

export const {
  addToCart,
  decreaseQuantity,
  removeCartItem,
  clearCart,
  getTotals,
} = cartSlice.actions

export const selectCart = (state) => state.cart

export default cartSlice.reducer
