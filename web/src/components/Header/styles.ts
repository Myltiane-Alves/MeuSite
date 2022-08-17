import styled from "styled-components";

export const Header = styled.header`
    background-color: #000;
    flex-direction: column;
    /* width: 300px; */
    height: 100vh;
    div {
        div {
            width: 100%;
            padding-bottom: 1rem;
            img {
                width: 200px;
                align-items: center;
            }
        }
        nav {

            ul {
                padding-top: 2rem;
                li {
                    background-color: red;
                    text-align: center;
                    a {
                        background-color: blue;
                        color: #fff;
                        font-size: 1rem;
                        font-weight: 400;
                    }
                    padding-bottom: 1rem;
                    padding-top: 1rem;
                }
            }
        }
    }
`;