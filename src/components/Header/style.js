import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 0.5px 0.5px 10px 0.5px #000;
  background-color: #181a1b;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  z-index: 5;

  .container-left {
    display: flex;
    gap: 30px;
  }

  .container-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .cartItems {
    display: flex;
    position: relative;
    cursor: pointer;
  }

  .cartItems div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 22px;
    min-height: 22px;
    border-radius: 50%;
    background-color: #9758a6;
    color: #ececec;
    position: absolute;
    top: -13px;
    right: -6px;
    font-size: 16px;
  }

  span {
    height: 40px;
    border-right: 0.8px solid #bababa;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    gap: 4px;

    p {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: #ececec;
    }
    a {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #9758a6;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#ececec')};
  font-weight: ${props => (props.isActive ? 'bold' : '400')};
  font-size: 16px;
  line-height: 19px;

  &:hover {
    color: #9758a6;
  }
`
