import Select from 'react-select'
import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  background-color: #e5e5e5;
  padding: 20px;
  width: 100%;

  label {
    font-size: 13px;
    color: #fff;
    margin-bottom: 3px;
    padding-left: 10px;
    margin-top: 25px;
  }

  input {
    border-radius: 20px;
    height: 45px;
    padding-left: 10px;
    border: none;
    outline: none;
    background: #ffffff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 100px;

    padding: 30px;
    background-color: #565656;

    .file-product {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: 1px dashed #fff;
      border-radius: 5px;
      height: 45px;
    }

    #file {
      height: 1px;
      opacity: 0;
    }
  }
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 70px;
`

export const SelectStyles = styled(Select)`
  width: 100%;
  cursor: pointer;

  .css-1s2u09g-control {
    cursor: pointer;
  }
`

export const ErrorMessageStyles = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  margin-top: 4px;
  color: #cc1717;
`
