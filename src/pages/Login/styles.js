import styled from 'styled-components';

export const Container = styled.main `
  height: 100vh;
  width: 100vw;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .cart {
    display: none;
  }

  section {
    width: 100%;
    background-color: #fff;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 90%;

      .logo {
        max-width: 200px;
        width: 100%;
        margin-bottom: 30px;
      }
      
      .content-form {
        width: 100%;
        margin-bottom: 35px;
        position: relative;

        .title {
          position: absolute;
          left: 10px;
          display: block;
          top: 16px;
          background-color: #fff;
          padding: 0 10px;
          transition: all 0.2s;
          font-size: 13px;
        }

        .titletop {
          top: -10px;
          padding: 0 20px;
          font-size: 15px;
        }

        .input {
          padding: 0 85px;
        }

        .inputTitle {
          padding: 0 20px
        }

        input {
          width: 100%;
          background-color: #fff;
          border: solid 1px #aaa;
          border-radius: 2px;
          height: 50px;
        }
      }

    }

  }

  @media only screen and (min-width: 768px) {
    .cart {
      display: block;
      max-height: 100vh;
      width: 52%;
    }

    section {
        width: 48%;

        form {
            width: 60%;
        }

    }

  }

`;