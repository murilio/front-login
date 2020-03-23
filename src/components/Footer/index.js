import React from 'react';

// import { Container } from './styles';

export default function Fooder() {

  const user = JSON.parse(localStorage.getItem('@shopsogo-user'))

  return (
    <>
      footer: 
        {
          user.name
        }
    </>
  );
}
