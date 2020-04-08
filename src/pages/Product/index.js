import React, { useState } from 'react';

import api from '../../services/api'

// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// style
import { Container } from './styles'
import logoUpload from '../../assets/images/upload.png'

export default function Product() {

  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ value, setValue ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ file, setFile ] = useState('')
  const [ error, setError ] = useState('')

  async function handlesubmit(e) {
    e.preventDefault()
    
    // const toBase64 = file => new Promise((resolve, reject) => {
    //   const reader = new FileReader()
    //   reader.readAsDataURL(file)
    //   reader.onload = () => resolve(reader.result)
    //   reader.onerror = error => reject(error)
    // })

    //   file: await toBase64(file)
    
    let formData = new FormData();    //formdata object

    formData.append('name', name)
    formData.append('description', description)
    formData.append('value', value)
    formData.append('category', category)
    formData.append('file', file)

    const config = {     
      headers: { 'item-type': 'multipart/form-data' }
    }

    if(name === ''){
      setError('preencha')
      return;
    }

    try {
      await api.post('/products', formData, config)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <Header/>
        <Container onSubmit={handlesubmit}>
          <div className="content-form">
            <div className="item-form">
              <label>Nome</label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
              {error}
            </div>

            <div className="item-form">
              <label>Descrição</label>
              <input
                id="description"
                type="text"
                name="description"
                autoComplete="off"
                onChange={(e) => setDescription(e.target.value)}
              />
              {error}
            </div>

            <div className="item-form">
              <label>Valor</label>
              <input
                id="value"
                type="number"
                name="value"
                autoComplete="off"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div className="item-form">
              <label>Categoria</label>
              <input
                id="category"
                type="text"
                name="category"
                autoComplete="off"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="item-form item-file">
              <label htmlFor="file">
                <img src={logoUpload} alt="imagem de uplaod" />
              </label>
              <span>{!file ? 'Nenhum arquivo selecionado' : file.name}</span>
              <input
                id="file"
                type="file"
                name="file"
                autoComplete="off"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div>
          </div>
          <button type="submit">Cadastrar produto</button>
          {/* <img src={logoteste} alt="" /> */}
        </Container>
      <Footer/>
    </>
  );
}
