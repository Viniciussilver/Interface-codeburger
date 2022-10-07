import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const user = localStorage.getItem('userData')
  if (!user) {
    return <Navigate replace to="/login" />
  }

  // if (isAdmin && !JSON.parse(user).admin) {
  //   return <Navigate replace to='/'/>
  // }
  return children
}

export default PrivateRoute
PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
}
