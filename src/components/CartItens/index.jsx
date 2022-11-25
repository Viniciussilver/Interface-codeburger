import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import * as C from './style'

export const CartItens = () => {
  const { cartProducts, decreaseProducts, increaseProducts } = useCart()

  return (
    <C.Container>
      <C.Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </C.Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(item => (
          <C.Body key={item.id}>
            <img src={item.url} alt="Imagem do produto" />
            <div>
              <p className="item-name">{item.name}</p>
            </div>
            <p>{formatCurrency(item.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => increaseProducts(item.id)}>+</button>
            </div>

            <p>{formatCurrency(item.quantity * item.price)}</p>
          </C.Body>
        ))
      ) : (
        <C.EmptyCart>Carrinho Vazio</C.EmptyCart>
      )}
    </C.Container>
  )
}
