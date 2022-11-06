import React from 'react'

import CartLogo from '../../assets/logo-cart.svg'
import { CartItens, CartResume } from '../../components'
import * as C from './style'

export const Cart = () => {
  return (
    <C.Container>
      <C.CartImg src={CartLogo} alt="Logo da home" />
      <div className="container-item">
        <CartItens />
        <CartResume />
      </div>
    </C.Container>
  )
}
