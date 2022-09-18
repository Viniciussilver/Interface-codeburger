import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('userData', JSON.stringify(userInfo))
  }
  useEffect(() => {
    const loadUserData = async () => {
      const data = await localStorage.getItem('userData')

      if (data) {
        setUserData(JSON.parse(data))
      }
    }
    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('error')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node,
}
