import PropTypes from 'prop-types'
import React from 'react'

import { StyledButton } from './style'

export const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.string,
}
