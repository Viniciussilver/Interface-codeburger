import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/ofers.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import * as C from './style'

export const OffersCarousel = () => {
  const [offers, setOffers] = useState([])
  const { putProductsInCart } = useCart()

  useEffect(() => {
    const loadOffers = async () => {
      const { data } = await api.get('products')

      const productsOnOffer = data
        .filter(item => !item.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setOffers(productsOnOffer)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ]
  return (
    <C.ContainerCarousel>
      <C.CategoryImg src={Offers} alt="image offers" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <C.BoxItem key={product.id}>
              <C.Img src={product.url} alt="Foto da categoria" />
              <C.P>{product.name}</C.P>
              <C.Span>{product.formatedPrice}</C.Span>
              <C.Button onClick={() => putProductsInCart(product)}>
                Peça agora
              </C.Button>
            </C.BoxItem>
          ))}
      </Carousel>
    </C.ContainerCarousel>
  )
}
