import Select from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
  padding: 20px;
`

export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
  margin: 5px 0;
`

export const SelectStyles = styled(Select)`
  width: 240px;
  cursor: pointer;

  .css-1s2u09g-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d50;
  cursor: pointer;
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #9758a6' : 'none')};
  padding-bottom: 4px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : '400')};
`
