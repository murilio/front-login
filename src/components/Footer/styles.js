import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #01243D;
  width: 100%;
  height: 110px;
  margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    p {
      color: #EFB13B;
    }

    .holding {
      display: flex;
      align-items: center;

      p {
        font-size: 14px;
        margin-right: 10px;
        color: #fff;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .footer {
        flex-direction: row;
    }
  }
`;
