import React, { useState } from 'react';

import api from '../../service/api'

import { login } from '../../service/auth'

export default function Login() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  async function handleSubmit(e) {

    e.preventDefault()
    try {
      const response = await api.post('/login', {
        email, password
      })

      login(response.data.token, response.data.user)
      console.log(response.data)
      window.location.href = '/'
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <br/>

      <form onSubmit={handleSubmit}>
        <input
          type="email" 
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          type="password" 
          name="password" 
          onChange={(e) => setPassword(e.target.value) }
        />
        <br></br>
        <input type="submit" value="enviar" />
      </form>
    </>
  );
}
