import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import PropTypes from 'prop-types'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import list from './menu-list'
import * as C from './style'

export const SideMenuAdmin = ({ path }) => {
  const { logout } = useUser()

  return (
    <C.Container>
      <div className='box-items-menu'>
        <hr></hr>
        {list.map(item => (
          <C.ItemContainer isActive={path === item.nav} key={item.id}>
            <item.icon className='icon' />
            <C.ListLink to={item.nav}>{item.label}</C.ListLink>
          </C.ItemContainer>
        ))}
        <hr></hr>
      </div>

      <C.ItemContainer isActive={false}>
        <ExitToAppIcon className='icon' />
        <C.ListLink to='/login' onClick={() => logout()}>
          Sair
        </C.ListLink>
      </C.ItemContainer>
    </C.Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string,
}
