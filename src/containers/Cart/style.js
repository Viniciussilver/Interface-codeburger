import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 72px);
  background-color: #272a2c;
  display: flex;
  flex-direction: column;

  .container-item {
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    margin: 50px 0;
  }
`

export const CartImg = styled.img`
  width: 100%;
`
