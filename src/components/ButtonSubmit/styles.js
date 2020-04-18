import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  background-color: #01243D;
  color: #fff;
  width: 100%;
  cursor: pointer;
  padding: 10px 0;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  svg {
    color: #fff;
    display: none;
  }

  p {
    color: #fff;
  }

  .loader {
    display: block;
    animation: spinner 2s linear infinite;
  }

  @keyframes spinner { 
    100% { 
      -webkit-transform: rotate(360deg); 
      transform:rotate(360deg); 
    } 
  }

  .text {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    width: auto;
    min-width: 200px;
    padding: 10px 30px;
  } 
`;
