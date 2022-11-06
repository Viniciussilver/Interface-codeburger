/* eslint-disable react/no-unknown-property */
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.png'
import Person from '../../assets/person.png'
import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import * as C from './style'

export const Header = () => {
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const location = useLocation()
  const { cartProducts } = useCart()

  return (
    <C.Container>
      <div className="container-left">
        <C.Link
          className="link-home"
          onClick={() => navigate('/')}
          isActive={location.pathname === '/'}
        >
          Home
        </C.Link>
        <C.Link
          className="link-products"
          isActive={location.pathname.includes('produtos')}
          onClick={() => navigate('/produtos')}
        >
          Ver Produtos
        </C.Link>
      </div>

      <div className="container-right">
        <div className="cartItems" onClick={() => navigate('/carrinho')}>
          <a className="pageHome">
            <img src={Cart} alt="carrinho" />
          </a>
          {cartProducts.length > 0 && <div>{cartProducts.length}</div>}
        </div>
        <span></span>
        <a>
          <img src={Person} alt="logo pessoa" />
        </a>
        <div className="container-text">
          <p>Olá, {userData.name}</p>
          <a
            className="link-logout"
            onClick={() => logout() && navigate('/login')}
          >
            Sair
          </a>
        </div>
      </div>
    </C.Container>
  )
}
