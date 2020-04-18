import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import { login } from '../../services/auth'

import shop from '../../assets/images/login.jpg'
import logo from '../../assets/images/logo512.png'
import SubmitButton from '../../components/ButtonSubmit'

import { Container } from './styles'

export default function Login() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  const [ emailtitle, setEmailtitle ] = useState('')
  const [ passwordtitle, setPasswordtitle ] = useState('')

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      email,
      password
    }

    try {
      const res = await api.post('/login', data)

      login(res.data.token, res.data.user.id)
      history.push('/')
      
    } catch (error) {
      setError('E-mail ou senha inválidos')
    }
  }

  function focusInputEmail() {
    setEmailtitle(!emailtitle)
  }

  function focusInputPassword() {
    setPasswordtitle(!passwordtitle)
  }

  return (
    <Container>
      <section>
        <form onSubmit={handleSubmit}>
          <img className="logo" src={logo} alt="logo do site" />
          <div className="content-form">
            <label className={ emailtitle ? 'title titletop' : 'title' } htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={focusInputEmail}
              onBlur={focusInputEmail}
              className={ emailtitle ? 'input inputTitle' : 'input' }
            />
          </div>
          <div className="content-form">
            <label className={ passwordtitle ? 'title titletop' : 'title' } htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value) }
              onFocus={focusInputPassword}
              onBlur={focusInputPassword}
              className={ passwordtitle ? 'input inputTitle' : 'input' }
            />
          </div>
          <span style={{ 
            color: '#f00', 
            fontSize: 14, 
            marginBottom: 10,
            marginTop: -20
          }}>{error}</span>
          <SubmitButton title="Logar" time="5000"/>
        </form>
      </section>
      <img className="cart" src={shop} alt="shop do site" />
    </Container>
  );
}
