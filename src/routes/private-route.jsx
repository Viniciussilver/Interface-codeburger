import PropTypes from 'prop-types'
import React from 'react'
import { Route, Navigate } from 'react-router-dom'

function PrivateRoute({ element, ...rest }) {
  const user = localStorage.getItem('userData')

  return (
    <Route
      {...rest}
      element={user ? <Navigate to="/login" replace /> : element}
    />
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
}
