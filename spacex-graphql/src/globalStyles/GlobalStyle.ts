import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background-image: url("https://i.pinimg.com/originals/2f/76/75/2f767549ab9fb0d3468dc0f47319fe06.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  
  }
    body, html{
        margin:0;
        padding:0;
        border:0;
        box-sizing:border-box;
        
    }
    html {
        font-family: 'Fira Sans', sans-serif;
  font-size: 100%; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -ms-text-size-adjust: 100%; /* 2 */
  
}


a:focus {
  outline: thin dotted;
}

a:active,
a:hover, :focus {
  outline: 0;
}


body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

img {
  vertical-align: middle;
  max-width: 100%;
  display: block;
  border: 0; /* 1 */
  -ms-interpolation-mode: bicubic; /* 2 */
}
button {
  border: none;
}

a{
    text-decoration: none;
    padding:1%
}

#root{
 display:flex;


  
}
`;
