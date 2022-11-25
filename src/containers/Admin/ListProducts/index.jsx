/* eslint-disable react/no-unknown-property */
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import * as C from './style'

export const ListProducts = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await api.get('products')

      const arrayFormated = data.map(item => {
        return { ...item, formatedPrice: formatCurrency(item.price) }
      })

      setProducts(arrayFormated)
    }

    loadProducts()
  }, [])
  return (
    <C.Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align='center'>Produto em Oferta</TableCell>
              <TableCell align='center'>Imagem do Produto</TableCell>
              <TableCell align='center'>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {product.name}
                </TableCell>
                <TableCell>{product.formatedPrice}</TableCell>
                <TableCell align='center'>
                  {product.offer ? <C.IconTrue /> : <C.IconFalse />}
                </TableCell>
                <TableCell align='center'>
                  <img src={product.url} alt='Imagem produto' />
                </TableCell>
                <TableCell align='center'>
                  <C.Edit
                    onClick={() =>
                      navigate('/editar-produto', {
                        state: { product },
                      })
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </C.Container>
  )
}
