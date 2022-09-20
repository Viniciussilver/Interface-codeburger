import React from 'react'

import HomeLogo from '../../assets/img_home.png'
import CategoryCarousel from '../../components/CategoryCarousel'
import * as C from './style'

const Home = () => {
  return (
    <C.Container>
      <C.HomeImg src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
    </C.Container>
  )
}

export default Home
