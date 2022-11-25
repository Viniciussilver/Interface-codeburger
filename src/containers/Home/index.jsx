import React from 'react'
// import { useNavigate } from 'react-router-dom'

import HomeLogo from '../../assets/img_home.png'
import { OffersCarousel, CategoryCarousel } from '../../components'
// import { useUser } from '../../hooks/UserContext'
import * as C from './style'

export const Home = () => {
  // const { userData } = useUser()
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (userData.admin) {
  //     navigate('/pedidos')
  //   }
  // }, [])
  return (
    <C.Container>
      <C.HomeImg src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </C.Container>
  )
}
