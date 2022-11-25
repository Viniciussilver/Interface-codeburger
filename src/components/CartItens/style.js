import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: rgba(0, 0, 0, 0.8);
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  grid-gap: 10px 14px;
  padding: 10px;

  img {
    width: 130px;
    border-radius: 10px;
  }

  p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
  }
  .item-name {
    width: 150px;
  }

  .quantity-container {
    display: flex;

    gap: 15px;
    p {
      margin-top: 5px;
    }

    button {
      height: 20px;
      background: transparent;
      border: none;

      font-size: 22px;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`

export const EmptyCart = styled.p`
  font-weight: bold;
  padding: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
`
