import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductsInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCart = []
    if (cartIndex >= 0) {
      newCart = cartProducts
      newCart[cartIndex].quantity += 1

      setCartProducts(newCart)
    } else {
      product.quantity = 1
      newCart = [...cartProducts, product]
      setCartProducts(newCart)
    }

    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProductsInCart, cartProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('error')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node,
}
