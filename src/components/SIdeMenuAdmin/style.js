import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 300px;
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .box-items-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  hr {
    margin: 10px 20px;
  }
`

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  padding-left: 20px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#565656' : '#3c3c3c')};
  border-radius: 5px;

  .icon {
    color: #fff;
  }
`

export const ListLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;

  &:hover {
    opacity: 0.7;
  }
`
