import React, { useState, useEffect } from 'react';

// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// serviços
import api from '../../services/api'
import { getUser } from '../../services/auth'

// style
import { Container } from './styles'
import logoteste from '../../assets/images/login.jpg'

export default function Carrinho() {

    const USER_ID = getUser()
    const [ carrinho, setCarrinho ] = useState([])

    async function loadCarrinho(user_id) {
        try {
            const res = await api.get(`/carrinho/${user_id}`)
            setCarrinho(res.data.products)
            // console.log(carrinho)
        } catch (error) {
            
        }
    }

    async function removeCarrinho(produto_id) {
        await api.delete(`/carrinho/remover/${USER_ID}/${produto_id}`)
        loadCarrinho(USER_ID)
    }

    useEffect(() => {
        loadCarrinho(USER_ID)
    }, [USER_ID])

  return (
    <>
    <Header/>
    <Container>
        {
            carrinho.map(produto => (
            <div className="card" key={produto.id}>
                <img src={logoteste} alt={produto.description}/>
                <div className="conteudo">
                <h1>{ produto.name }</h1>
                <p>{ produto.description }</p>
                <p><span>Valor: R$</span> { produto.value }</p>
                <p><span>Categoria: </span> { produto.category }</p>
                <button onClick={() => removeCarrinho(produto.id)}>Remover do carrinho</button>
                </div>
            </div>
            ))
        }
    </Container>
    <Footer/>
    </>
  );
}
