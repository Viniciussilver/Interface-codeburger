import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  gap: 12px;
  padding: 14px;
  background: #fff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  /* background-color: white; */

  .info-product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`
export const Image = styled.img`
  width: 160px;
  border-radius: 10px;
`
export const ProductName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.8);
`
export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.7);
`
