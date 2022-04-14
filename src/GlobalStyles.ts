
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins', Sans-Serif;
    background-color: #f2f2f2;
  }
`;

export default Global;


export const Container = styled.div`
background-color: #17181F;
color: #797a81;
height: 100vh;
`
export const Area = styled.div`
margin: auto;
max-width: 980px;
width: 100%;
padding: 10px;
`
export const Header = styled.h1`
color: white;
text-align: center;
border-bottom: 1px solid #444;
padding-bottom: 20px;
`
