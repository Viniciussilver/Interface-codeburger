import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import api from '../../../services/api'
import * as C from './style'

export const EditProduct = () => {
  const { state } = useLocation()
  const [listCategories, setListCategories] = useState([])
  const [offer, setOffer] = useState(state?.product.offer)
  const [fileName, setFileName] = useState('')
  const navigate = useNavigate()

  const defaultValue = {
    value: state?.product.category.id,
    label: state?.product.category.name,
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category_id: Yup.object().required('Escolha uma categoria'),
    offer: Yup.boolean(),
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
    productDataFormData.append('offer', data.offer)
    console.log(data)

    await toast.promise(
      api.put(`products/${state?.product.id}`, productDataFormData),
      {
        pending: 'Editando novo produto',
        success: 'Produto editado com sucesso',
        error: 'Falha ao editar produto ',
      }
    )

    setTimeout(() => {
      navigate('/listar-produtos')
    }, 1900)
  }

  useEffect(() => {
    if (!state?.product) {
      return navigate('/listar-produtos')
    }
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
        <label className='label' htmlFor='name'>
          Nome
        </label>
        <input
          id='name'
          type='text'
          autoComplete='off'
          {...register('name')}
          defaultValue={state?.product.name}
        />
        <C.ErrorMessageStyles>{errors.name?.message}</C.ErrorMessageStyles>
        <label className='label' htmlFor='price'>
          Preço
        </label>

        <input
          autoComplete='off'
          id='price'
          type='number'
          {...register('price')}
          defaultValue={state?.product.price}
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

        <label className='label'></label>
        <Controller
          name='category_id'
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <C.SelectStyles
              {...field}
              options={listCategories}
              defaultValue={defaultValue}
            />
          )}
        />
        <C.ErrorMessageStyles>
          {errors.category_id?.message}
        </C.ErrorMessageStyles>

        <C.ContainerInput>
          <input
            id='input-checkBox'
            className='checkBox'
            type='checkbox'
            {...register('offer')}
            defaultChecked={state?.product.offer}
            onChange={e => setOffer(offer)}
          />

          <C.LabelCheck htmlFor='input-checkBox'>
            Produto em Oferta
          </C.LabelCheck>
        </C.ContainerInput>

        <C.ButtonStyles>Editar produto</C.ButtonStyles>
      </form>
    </C.Container>
  )
}
