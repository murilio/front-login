import React, { useState, useEffect } from 'react';

// serviços
import api from '../../services/api'
import { getUser } from '../../services/auth'

// componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// style
import { Container } from './styles'

export default function Profile() {

  const [ user, setUser ] = useState('')
  const USER_ID = getUser()

  async function loadUser(user_id) {
    const res = await api.get(`/profile/${user_id}`)
    console.log(res.data)
    setUser(res.data)
  }

  useEffect(() => {
    loadUser(USER_ID)
  }, [USER_ID])

  return (
    <>
      <Header/>
      <Container>
        <h1>Bem vindo {user.name}</h1>
        <p>Email: {user.email}</p>
      </Container>
      <Footer/>
    </>
  );
}
