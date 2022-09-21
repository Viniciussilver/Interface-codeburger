import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import imageTeste from '../../assets/img-teste.png'
import Offers from '../../assets/ofers.png'
import api from '../../services/api'
import * as C from './style'

const OffersCarousel = () => {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const loadOffers = async () => {
      const { data } = await api.get('product')

      const productsOnOffer = data.filter(item => !item.offer)
      setOffers(productsOnOffer)
      console.log(data)
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
              <C.Img src={imageTeste} alt="Foto da categoria" />
              <C.P>{product.name}</C.P>
              <C.Span>R$ {product.price}</C.Span>
              <C.Button>Peça agora</C.Button>
            </C.BoxItem>
          ))}
      </Carousel>
    </C.ContainerCarousel>
  )
}

export default OffersCarousel
