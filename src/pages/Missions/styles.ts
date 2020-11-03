
import styled from 'styled-components';

export const ItemContainer = styled.div`
background:#fff;
color: #293845;
border: solid 2px;
border-color:#b8cad4;
text-align:center;
flex-direction: column;

img {
  width: 100%;
  height: 500px;
}

a{
    text-decoration:none;
    color: #293845;
}
b{
  font-size: 18px;
}
`
export const ItemContainerText = styled.div`
  margin: 20px;
  
  display: flex;
`;

export const Container = styled.div`

  width: 900px;
  height: 700px;
  margin: 0 auto;
  
  
`;

export const ButtonItem = styled.button`

background: #b8cad4;
border-radius: 5px;
border: 0;
width: 120px;
height: 40px;
margin-top: 16px;
margin-bottom: 30px;
align-items: center;
justify-content: center;
text-align: center;

`