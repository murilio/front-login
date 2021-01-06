import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }

  div.left {
    width: 100%;
    height: 35%;
    padding: 5% 15%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      max-height: 300px;
      height: 100%;
    }

    @media only screen and (min-width: 768px) {
      width: 60%;
      height: 100%;
      padding: 0;
    }
  }

  div.right {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 5%;

    @media only screen and (min-width: 768px) {
      width: 40%;
      justify-content: space-around;
    }

    div.content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > h1 {
        font-size: 32px;
        text-align: center;
      }

      > p {
        font-size: 20px;
        text-align: center;
        margin: 20px 0 0 0;
        color: #777;
      }

      @media only screen and (min-width: 768px) {
        height: 100%;
      }
    }

    > form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      padding: 5% 0;

      div.form {
        height: 100%;

        > input {
          border: solid 1px #555;
          height: 50px;
          margin: 7px 0;
          color: #777;
          border-radius: 9px;
          padding: 0 10px;
          font-size: 14px;
          width: 100%;
        }
      }

      > button {
        border-radius: 9px;
        color: #777;
        background-color: #fff;
        border: 0;
        width: 100%;
        min-height: 55px;
        font-weight: 800;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
`
