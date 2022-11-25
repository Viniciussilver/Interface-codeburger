import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Register, Products, Login, Home, Cart, Admin } from '../containers'
import PrivateRoute from './PrivateRoute'

function Pages() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/cadastro' />
        <Route
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          path='/'
        />
        <Route
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
          path='/Produtos'
        />
        <Route
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
          path='/carrinho'
        />
        <Route
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
          path='pedidos'
        />
        <Route
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
          path='/listar-produtos'
        />
        <Route
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
          path='/novo-produto'
        />
        <Route
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
          path='/editar-produto'
        />
      </Routes>
    </Router>
  )
}

export default Pages
