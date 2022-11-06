import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/img_login.svg'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import * as C from './style'

export const Login = () => {
  const { putUserData } = useUser()
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digítos'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem vindo(a)',
        error: 'Verifique seu e-mail e senha',
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos')
      } else {
        navigate('/')
      }
    }, 1010)
  }

  return (
    <C.Container>
      <C.ImgLogin src={LoginImg} alt="Login-image" />

      <C.ContainerItens>
        <C.Flex>
          <img src={Logo} />
          <h2>Login</h2>
        </C.Flex>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <C.Label>Email</C.Label>
          <C.Input
            error={errors.email?.message}
            type="email"
            {...register('email')}
          />
          <C.BoxError>
            <C.ErrorMessage>{errors.email?.message}</C.ErrorMessage>
          </C.BoxError>

          <C.Label>Senha</C.Label>
          <C.Input
            error={errors.password?.message}
            type="password"
            {...register('password')}
          />
          <C.BoxError>
            <C.ErrorMessage>{errors.password?.message}</C.ErrorMessage>
          </C.BoxError>

          <Button type="submit" style={{ marginTop: 55 }}>
            Entrar
          </Button>
        </form>

        <C.SignInLink>
          Não possuí conta ?{' '}
          <Link
            style={{ textDecorationLine: 'underline', color: '#fff' }}
            to="/cadastro"
          >
            Cadastre-se
          </Link>
        </C.SignInLink>
      </C.ContainerItens>
    </C.Container>
  )
}
