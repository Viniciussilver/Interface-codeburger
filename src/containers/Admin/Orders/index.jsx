import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import status from './orderStatus'
import { Row } from './row'
import * as C from './style'

export const Orders = () => {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])

  const newStatus = [{ id: 1, value: 'Todos', label: 'Todos' }, ...status]

  const [active, setActive] = useState(1)

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products,
    }
  }

  useEffect(() => {
    const newRows = orders.map(item => createData(item))
    setRows(newRows)
  }, [orders])

  useEffect(() => {
    const status = newStatus.find(item => item.id === active)

    handleStatus(status)
  }, [rows])

  useEffect(() => {
    const loadOrders = async () => {
      const { data } = await api.get('orders')

      setOrders(data)
    }

    loadOrders()
  }, [])

  const handleStatus = status => {
    if (status.id === 1) {
      setFilteredOrders(rows)
    } else {
      const newOrders = rows.filter(order => order.status === status.value)
      setFilteredOrders(newOrders)
    }
  }

  return (
    <C.Container>
      <C.Menu>
        {newStatus.map(item => (
          <C.LinkMenu
            isActive={item.id === active}
            onClick={() => {
              handleStatus(item)
              setActive(item.id)
            }}
            key={item.id}
          >
            {item.value}
          </C.LinkMenu>
        ))}
      </C.Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Ciente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map(row => (
              <Row
                key={row.orderId}
                row={row}
                orders={rows}
                setOrders={setRows}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </C.Container>
  )
}
