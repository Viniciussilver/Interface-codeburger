import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 72px);
  background-color: #212425;
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const ContainerMenu = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 2px;

  color: ${prop => (prop.isActive ? '#9758A6' : '#9A9A9D')};
  border-bottom: ${prop => (prop.isActive ? '2px solid #9758A6' : 'none')};
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  padding: 60px 40px;
`
