import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/registration_page_image.svg'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'
import * as C from './style'

export const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const navigate = useNavigate()
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digítos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.success('Cadastro criado com sucesso')
        setTimeout(() => {
          navigate('/login')
        }, 1100)
        return
      }
      if (status === 409) {
        return toast.error('E-mail já cadastrado')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  return (
    <C.Container>
      <C.RegisterImg src={RegisterImg} alt='Register-image' />

      <C.ContainerItens>
        <C.Flex>
          <img src={Logo} />
          <h2>Cadastre-se</h2>
        </C.Flex>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <C.Label>Nome</C.Label>
          <C.Input
            autoComplete='off'
            error={errors.name?.message}
            type='text'
            {...register('name')}
          />
          <C.BoxError>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </C.BoxError>

          <C.Label>Email</C.Label>
          <C.Input
            autoComplete='off'
            error={errors.email?.message}
            type='email'
            {...register('email')}
          />
          <C.BoxError>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </C.BoxError>

          <C.Label>Senha</C.Label>
          <C.Input
            error={errors.password?.message}
            type={passwordVisible ? 'text' : 'password'}
            {...register('password')}
          />
          <div className='box-icons-password'>
            <C.IconPassword
              onClick={() => setPasswordVisible(false)}
              passwordVisible={passwordVisible}
            />
            <C.PasswordOff
              onClick={() => setPasswordVisible(true)}
              passwordVisible={passwordVisible}
            />
          </div>
          <C.BoxError>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </C.BoxError>

          <C.Label>Confirmar senha</C.Label>
          <C.Input
            error={errors.confirmPassword?.message}
            type='password'
            {...register('confirmPassword')}
          />
          <C.BoxError>
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          </C.BoxError>

          <Button type='submit' style={{ marginTop: 37 }}>
            Cadastrar
          </Button>
        </form>

        <C.SignInLink>
          Já possuí conta ?{' '}
          <Link
            style={{ textDecorationLine: 'underline', color: '#fff' }}
            to='/login'
          >
            Entrar
          </Link>
        </C.SignInLink>
      </C.ContainerItens>
    </C.Container>
  )
}
