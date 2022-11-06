import React from 'react'

import HomeLogo from '../../assets/img_home.png'
import { OffersCarousel, CategoryCarousel } from '../../components'
import * as C from './style'

export const Home = () => {
  return (
    <C.Container>
      <C.HomeImg src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </C.Container>
  )
}
