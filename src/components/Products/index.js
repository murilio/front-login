import React, { useEffect, useState } from 'react';

import api from '../../services/api'
import { getUser } from '../../services/auth'

// style
import { Container } from './styles'

export default function Home() {

  const USER_ID = getUser()

  const [ cart, setCart ] = useState(0)
  const [ produtos, setProdutos ] = useState([])

  async function loadProdutos() {
    try {
      const res = await api.get('/products')
      setProdutos(res.data)
    } catch (error) {
      
    }
  }

  async function loadCart(user_id) {
    const res = await api.get(`/carrinho/${user_id}`)
    setCart(res.data.count)
  }

  async function adicionarCarrinho(produto_id) {
    await api.post(`/carrinho/adicionar/${USER_ID}/${produto_id}`)
    loadCart(USER_ID)
    console.log(cart)
  }

  useEffect(() => {
    loadProdutos()
    loadCart(USER_ID)
  }, [USER_ID])

  return (
    <Container>
    {
      produtos.map(produto => (
      <div className="card" key={produto.id}>
          <img src={produto.filename} alt={produto.description}/>
          <div className="conteudo">
          <h1>{ produto.name }</h1>
          <p>{ produto.description }</p>
          <p><span>Valor: R$</span> { produto.value }</p>
          <p><span>Categoria: </span> { produto.category }</p>
          <button onClick={() => adicionarCarrinho(produto.id)}>Adicionar ao carrinho</button>
          </div>
      </div>
      ))
    }
    </Container>
  );
}
