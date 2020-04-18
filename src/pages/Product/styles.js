import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  .content-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item-form {
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        display: block;
        top: 16px;
        background-color: #fff;
        transition: all 0.2s;
        font-size: 13px;
        cursor: pointer;

        img {
          width: 100px;
        }
      }

      input {
        width: 100%;
        background-color: #fff;
        border: solid 1px #aaa;
        border-radius: 2px;
        height: 50px;
        padding: 0 20px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 100px;
    padding: 0;
    min-height: calc(100vh - 260px);

    .content-form {
      .item-file {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
      }
      .item-form {
        width: 580px;
        margin-top: 20px;
      }
    }
  }
`;
