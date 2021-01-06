import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// styles
import { Container } from './styles'

// images
import Logo from '../../images/logo.png'

// services
import api from '../../services/api'
import { login } from '../../services/auth'

// validate
const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Informe um e-mail válido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(5, 'mínimo de 5 caracteres')
    .required('Senha é obrigatório')
})

export default function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    try {
      const res = await api.post('/loginOrCreate', data)
      login(res.data.token)
      if (res.status === 200) {
        alert('usuário encontrado')
      }
      if (res.status === 201) {
        alert('usuário criado')
      }
    } catch (err) {
      if (err.request.status === 400) {
        alert('usuário encontrado mas com senha inválida')
      }
    }
  }

  return (
    <Container>
      <div className='left'>
        <img src={Logo} alt='Logo application' />
      </div>
      <div className='right'>
        <div className='content'>
          <h1>Venha fazer parte você também!</h1>
          <p>
            Este é um app apenas para fim didáticos! Caso queira se cadastrar
            pode ficar a vontade que nenhum de seus dados será exposto!!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <div className='form'>
            <input type='text' name='name' ref={register} placeholder='Name' />
            {errors.name && <p>{errors.name.message}</p>}
            <input
              type='text'
              name='email'
              ref={register}
              placeholder='E-mail'
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
              type='password'
              name='password'
              ref={register}
              placeholder='Password'
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button>Sign in/Register</button>
        </form>
      </div>
    </Container>
  )
}
