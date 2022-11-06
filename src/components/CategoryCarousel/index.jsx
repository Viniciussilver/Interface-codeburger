import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categories.png'
import api from '../../services/api'
import * as C from './style'

export const CategoryCarousel = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    const load = async () => {
      const { data } = await api.get('categories')
      setCategory(data)
      console.log(data)
    }
    load()
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
      <C.CategoryImg src={Category} alt="image category" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {category &&
          category.map(category => (
            <C.BoxItem key={category.id}>
              <C.Img src={category.url} alt="Foto da categoria" />
              <C.Button to="/produtos" state={{ categoryId: category.id }}>
                {category.name}
              </C.Button>
            </C.BoxItem>
          ))}
      </Carousel>
    </C.ContainerCarousel>
  )
}
