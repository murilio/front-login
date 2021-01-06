import React from 'react'

// rotas
import Router from './routes'

// global style
import GlobalStyle from './styles/Global'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}
