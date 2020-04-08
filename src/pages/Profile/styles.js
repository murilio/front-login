import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 30px;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 100px;
    min-height: calc(100vh - 260px)
  }
`;
