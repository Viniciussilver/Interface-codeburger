import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categories.png'
import api from '../../services/api'
import * as C from './style'

const CategoryCarousel = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    const load = async () => {
      const { data } = await api.get('categories')
      setCategory(data)
    }
    load()
  }, [])
  return (
    <C.ContainerCarousel>
      <C.CategoryImg src={Category} alt="image category" />
      <Carousel itemsToShow={5}>
        {category &&
          category.map(category => (
            <div key={category.id}>
              <img src={category.url} alt="Foto da categoria" />
              <button>{category.name}</button>
            </div>
          ))}
      </Carousel>
    </C.ContainerCarousel>
  )
}

export default CategoryCarousel
