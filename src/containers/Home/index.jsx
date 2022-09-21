import React from 'react'

import HomeLogo from '../../assets/img_home.png'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import * as C from './style'

const Home = () => {
  return (
    <C.Container>
      <C.HomeImg src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </C.Container>
  )
}

export default Home
