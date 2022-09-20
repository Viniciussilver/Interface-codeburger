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
// import PrivateRoute from './private-route'

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
        <Route
          element={data ? <Home /> : <Navigate to="/login" replace />}
          path="/"
        />
      </Routes>
    </Router>
  )
}

export default Pages
