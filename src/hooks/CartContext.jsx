import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async product => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(product))
  }
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

    await updateLocalStorage(newCart)
  }

  const deleteProduct = async id => {
    const newCart = cartProducts.filter(item => item.id !== id)

    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  const increaseProducts = async id => {
    const newCart = cartProducts.map(item => {
      return item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    })
    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }
  const decreaseProducts = async id => {
    const cartIndex = cartProducts.findIndex(pr => pr.id === id)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(item => {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      })
      setCartProducts(newCart)
      await updateLocalStorage(newCart)
    } else {
      deleteProduct(id)
    }
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
    <CartContext.Provider
      value={{
        increaseProducts,
        decreaseProducts,
        putProductsInCart,
        cartProducts,
      }}
    >
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
