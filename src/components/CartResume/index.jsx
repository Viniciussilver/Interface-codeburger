import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import * as C from './style'

export const CartResume = () => {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts, resetCart } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, currency) => {
      return acc + currency.price * currency.quantity
    }, 0)
    setFinalPrice(sumAllItems)
  }, [cartProducts])

  const submitOrder = async () => {
    if (cartProducts.length < 1) {
      return toast.error('Seu carrinho esta vazio, adicione um produto')
    }
    const order = cartProducts.map(item => {
      return { id: item.id, quantity: item.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      panding: 'Realizando seu pedido ...',
      success: 'Pedido realizado com sucesso',
      error: 'Falha ao tentar realizar o seu pedido, tente novamente',
    })

    setTimeout(() => {
      resetCart()
    }, 1100)
  }

  return (
    <C.Container>
      <div className='container-items'>
        <div className='container-top'>
          <h2 className='title'>Resumo do pedido</h2>
          <p className='items'>Itens</p>
          <p className='item-price'>{formatCurrency(finalPrice)}</p>
          <p className='delivery-tax'>Taxa de entrega</p>
          <p className='delivery-tax-price'>{formatCurrency(deliveryTax)}</p>
        </div>
        <div className='container-bottom'>
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
        <Button
          onClick={() => submitOrder()}
          style={{ width: '100%', marginTop: 15, borderRadius: 7 }}
        >
          Finalizar pedido
        </Button>
      </div>
    </C.Container>
  )
}
