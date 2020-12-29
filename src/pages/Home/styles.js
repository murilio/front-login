import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;

  .card {
    margin: 10px;
    max-width: 380px;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 15px #aaa;

    display: flex;
    justify-content: space-between;

    img {
      height: 80px;
      width: 80px;
    }

    .conteudo {
      max-width: 260px;
      width: 100%;
      padding: 0 5px;

      h1 {
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: 600;
      }

      p {
        font-weight: 400;
        opacity: 0.9;
        font-size: 15px;
        margin: 10px 0;

        span {
          font-weight: 500;
        }
      }

      button {
        border: 0;
        background-color: #d4edda;
        color: #155724;
        font-size: 13px;
        padding: 7px 15px;
        cursor: pointer;
        border-radius: 3px;
        text-transform: uppercase;
        transition: all 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
    min-height: calc(100vh - 260px);
  }
`
