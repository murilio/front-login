import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import shop from '../../assets/images/register.jpg'
import logo from '../../assets/images/logo512.png'
import SubmitButton from '../../components/ButtonSubmit'

import { Container } from './styles'

export default function Register() {
  
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmpassword, setConfirmpassword ] = useState('')
  const [ error, setError ] = useState('')

  /**
   * estado do label */ 
  const [ nametitle, setNametitle ] = useState('')
  const [ emailtitle, setEmailtitle ] = useState('')
  const [ passwordtitle, setPasswordtitle ] = useState('')
  const [ confirmpasswordtitle, setConfirmpasswordtitle ] = useState('')

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      name, 
      email, 
      password
    }

    if(password !== confirmpassword || password === '' ){
      setError('Senhas não podem ser diferentes')
    } else {
      try {
        
        await api.post('/users', data)
        history.push('/login')
        
      } catch (error) {
        setError('E-mail ou senha inválidos')
      }
    }

  }

  function focusInputName() {
    setNametitle(!nametitle)
  }

  function focusInputEmail() {
    setEmailtitle(!emailtitle)
  }

  function focusInputPassword() {
    setPasswordtitle(!passwordtitle)
  }

  function focusInputConfirmPassword() {
    setConfirmpasswordtitle(!confirmpasswordtitle)
  }

  return (
    <Container>
      <section>
        <form onSubmit={handleSubmit}>
          <img className="logo" src={logo} alt="shop do site" />
          <div className="content-form">
            <label className={ nametitle ? 'title titletop' : 'title' } htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              onFocus={focusInputName}
              onBlur={focusInputName}
              className={ nametitle ? 'input inputTitle' : 'input' }
            />
          </div>
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
              className={ passwordtitle ? 'inputTitlePassword inputTitle' : 'inputTitlePassword' }
            />
          </div>
          <div className="content-form">
            <label className={ confirmpasswordtitle ? 'title titletop' : 'title' } htmlFor="confirmpassword">Confirm Password</label>
            <input
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              onChange={(e) => setConfirmpassword(e.target.value) }
              onFocus={focusInputConfirmPassword}
              onBlur={focusInputConfirmPassword}
              className={ confirmpasswordtitle ? 'inputTitleConfirmPassword inputTitle' : 'inputTitleConfirmPassword' }
            />
          </div>
          <span style={{ 
            color: '#f00', 
            fontSize: 14, 
            marginBottom: 10,
            marginTop: -20
          }}>{error}</span>
          <SubmitButton title="Registrar" time="10000" />
        </form>
      </section>
      <img className="cart" src={shop} alt="shop do site" />
    </Container>
  );
}
