import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ProductsLogo from '../../assets/logo-produtos.svg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import * as C from './style'

export const Products = () => {
  const { state } = useLocation()

  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [category, setCategory] = useState([])
  const [product, setProduct] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    const loadCategory = async () => {
      const { data } = await api.get('categories')

      const newCategory = [{ id: 0, name: 'Todos' }, ...data]
      setCategory(newCategory)
    }

    const loadProduct = async () => {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProduct(newProducts)
    }

    loadCategory()
    loadProduct()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(product)
    } else {
      const filterProducts = product.filter(
        product => product.category_id === activeCategory
      )

      setFilteredProducts(filterProducts)
    }
  }, [activeCategory, product])

  return (
    <C.Container>
      <C.ProductsImg src={ProductsLogo} alt="Logo produtos" />

      <C.ContainerMenu>
        {category &&
          category.map(item => (
            <C.CategoryButton
              key={item.id}
              isActive={activeCategory === item.id}
              type="button"
              onClick={() => setActiveCategory(item.id)}
            >
              {item.name}
            </C.CategoryButton>
          ))}
      </C.ContainerMenu>
      <C.ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(item => (
            <CardProduct key={item.id} product={item} />
          ))}
      </C.ProductsContainer>
    </C.Container>
  )
}
