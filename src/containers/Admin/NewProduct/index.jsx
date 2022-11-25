import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import api from '../../../services/api'
import * as C from './style'

export const NewProduct = () => {
  const [listCategories, setListCategories] = useState([])
  const [fileName, setFileName] = useState('')
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category_id: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', value => {
        return value?.length > 0
      })
      .test('type', e => {
        const types = ['image/jpeg', 'image/png']

        return types.includes(e[0].type)
      }),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm()
  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category_id.value)
    productDataFormData.append('file', data.file[0])

    await toast.promise(api.post('products', productDataFormData), {
      pending: 'Verificando',
      success: 'Produto criado com sucesso',
      error: 'Falha ao criar produto ',
    })

    setTimeout(() => {
      navigate('/listar-produtos')
    }, 1900)
  }

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('categories')

      const arrayFormated = data.map(item => {
        return {
          value: item.id,
          label: item.name,
        }
      })
      setListCategories(arrayFormated)
    }
    loadCategories()
  }, [])

  return (
    <C.Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Nome</label>
        <input id='name' type='text' autoComplete='off' {...register('name')} />
        <C.ErrorMessageStyles>{errors.name?.message}</C.ErrorMessageStyles>
        <label htmlFor='price'>Preço</label>

        <input
          autoComplete='off'
          id='price'
          type='number'
          {...register('price')}
          // value={priceValue}
        />
        <C.ErrorMessageStyles>{errors.price?.message}</C.ErrorMessageStyles>

        <label className='file-product' htmlFor='file'>
          {fileName || (
            <>
              {' '}
              <CloudUploadIcon /> Carrege a imagem do produto
            </>
          )}
        </label>

        <input
          id='file'
          type='file'
          accept='image/png, image/jpeg'
          {...register('file')}
          onChange={e => setFileName(e.target.files[0]?.name)}
        />
        <C.ErrorMessageStyles>{errors.file?.message}</C.ErrorMessageStyles>

        <label></label>
        <Controller
          name='category_id'
          control={control}
          render={({ field }) => (
            <C.SelectStyles
              {...field}
              placeholder='Categorias'
              options={listCategories}
            />
          )}
        />
        <C.ErrorMessageStyles>
          {errors.category_id?.message}
        </C.ErrorMessageStyles>

        <C.ButtonStyles>Adicionar Produto</C.ButtonStyles>
      </form>
    </C.Container>
  )
}
