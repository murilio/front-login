import React, { useState, useEffect } from 'react';

import api from '../../services/api'

// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// style
import { Container } from './styles'

export default function Product() {

  const [ products, setProducts ] = useState([])
  // const [ cart, setCart ] = useState(0)

  async function loadProducts() {
    try {
      const res = await api.get('/products')
      setProducts(res.data)
    } catch (error) {
      if(error){
        console.log(error)
      }
    }
  }

  // async function loadCart(userID) {
  //   try {
  //     const res = await api.get(`/cart/${userID}`)
  //     setCart(res.data.count)
  //     console.log(res.data)
  //   } catch (error) {

  //   }
  // }

  // async function addcart(id) {
  //   try {
  //     await api.post(`/add/cart/${userID}/${id}`)
  //     loadCart(userID)
  //   } catch (error) {
      
  //   }
  // }

  useEffect(() => {
    loadProducts()
    // loadCart(userID)
  })

  return (
    <>
      <Header/>
      <Container>
      {
        products.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
            {/* <button onClick={() => addcart(product.id)}>Adicionar ao carrinho</button>   */}
          </div>
        ))
      }
      </Container>
      <Footer/>
    </>
  );
}
