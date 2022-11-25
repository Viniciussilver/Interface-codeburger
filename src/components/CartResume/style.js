import styled from 'styled-components'

export const Container = styled.div`
  .container-items {
    background-color: #fff;
    padding: 15px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    color: rgba(0, 0, 0, 0.8);
    position: sticky;
    top: 100px;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas: 'title title' 'items item-price' 'delivery-tax delivery-tax-price';
  }
  .title {
    grid-area: title;
    margin-bottom: 20px;
  }

  .items {
    grid-area: items;
  }
  .item-price {
    grid-area: item-price;
  }
  .delivery-tax {
    grid-area: delivery-tax;
  }
  .delivery-tax-price {
    grid-area: delivery-tax-price;
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 23px;
  }
`
