import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import { EditProduct } from './EditProduct'
import { ListProducts } from './ListProducts'
import { NewProduct } from './NewProduct'
import { Orders } from './Orders'
import * as C from './style'

export const Admin = () => {
  const { pathname } = useLocation()

  return (
    <C.Container>
      <SideMenuAdmin path={pathname} />
      <C.ContainerComponents>
        {pathname === '/pedidos' && <Orders />}
        {pathname === '/listar-produtos' && <ListProducts />}
        {pathname === '/novo-produto' && <NewProduct />}
        {pathname === '/editar-produto' && <EditProduct />}
      </C.ContainerComponents>
    </C.Container>
  )
}
