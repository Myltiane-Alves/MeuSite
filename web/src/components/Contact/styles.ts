import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem;

  div {

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #156ac9;
      text-align: center;
    }
    div {
      display: flex;
      p {
        font-size: 1rem;
        font-weight: 400;
        padding-left: 0.625rem;
        margin: 0;
      }
    }
    padding-bottom: 1rem;
  }
  div{
    form {
      div {
        /* display: flex; */
        flex-direction: column;
        label {
          font-size: 1rem;
          line-height: 2rem;
          padding-right: 2rem;
        }
        input {
          height: 2.5rem;
          border: none;
          padding: 0.625rem;
          border-radius: 1.875rem;
          background-color: #ededed;
        }
        textarea {
          height: 12.5rem;
          width: 100%;
          border: none;
          border-radius: 1.875rem;
          background-color: #ededed;
        }
        textarea::placeholder {
          padding-left: 1rem;
          padding-top: 1rem;
        }
        textarea:hover {
          background-color: #ededed;
        }
        textarea:focus {
          background-color: #ededed;
        }
      }
      .btn {
        border: none;
        border-radius: 1.875rem;
        padding: 0.625rem 1.875rem;
        transition: 0.5s ease-in-out;
        background-color: #156ac9;
        width: 100%;
        max-width: 18.75rem;
        margin: auto;
        a {
          font-size: 1rem;
          color: #fff;
          line-height: 2rem;


        }
      }
    }
  }
`;
