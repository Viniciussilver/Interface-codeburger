import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import * as C from './style'

export const CardProduct = ({ product }) => {
  const { putProductsInCart } = useCart()
  const navigate = useNavigate()
  return (
    <C.Container>
      <C.Image src={product.url} alt="imagem do produto" />

      <div className="info-product">
        <C.ProductName>{product.name}</C.ProductName>

        <div>
          <C.ProductPrice>{product.formatedPrice}</C.ProductPrice>
          <Button onClick={() => putProductsInCart(product)}>Adicionar</Button>
        </div>
      </div>
    </C.Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object,
}
