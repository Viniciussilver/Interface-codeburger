import styled from 'styled-components'

import BackgroundImage from '../../assets/background_login.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterImg = styled.img`
  height: 95%;
`

export const ContainerItens = styled.div`
  height: 95%;
  border-radius: 0 10px 10px 0;
  background-color: #373737;
  display: flex;
  flex-direction: column;
  padding: 25px 55px;

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 90px;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-top: 10px;
  }
`

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  margin-top: 24px;
  margin-bottom: 3px;
  color: #ffffff;
  letter-spacing: 0.4px;
`

export const BoxError = styled.div`
  position: relative;
`

export const ErrorMessage = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 3px;
  color: #cc1717;
  position: absolute;
  top: 0;
  left: 0;
`

export const Input = styled.input`
  width: 380px;
  height: 38.5px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);

  border-radius: 5px;
  padding-left: 10px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  font-weight: 400;
  font-size: 15px;
  color: #373737;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 13px;

  color: #ffffff;

  a {
    text-decoration-line: underline;
    color: #ffffff;
  }
`
