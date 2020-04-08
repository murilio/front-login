import React from 'react';

import { Container } from './styles'

import alfagroup from '../../assets/images/alfagroup.png'

export default function Fooder() {

  return (
    <Container>
      <section className="footer">
        <p>© 2019 Sogo Shop. Todos os direitos reservados </p>
        <div className="holding">
          <p>Uma loja da</p>
          <img src={alfagroup} alt="imagem da holding" />
        </div>
      </section>
    </Container>
  );
}
