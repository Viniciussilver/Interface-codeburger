import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'

function Pages() {
  const [data, setData] = useState({})

  const userData = async () => {
    const response = await localStorage.getItem('userData')
    setData(response)
  }

  userData()
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route element={<Home />} path="/" />
      </Routes>
    </Router>
  )
}

export default Pages
