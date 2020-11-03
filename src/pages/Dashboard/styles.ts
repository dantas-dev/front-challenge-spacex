
import styled from 'styled-components';

export const ListContainer = styled.div`
background:#fff;
padding: 22px 32px;
color: #293845;
border: solid 2px;
border-color: #b8cad4;
margin-top: 10px;

p + p {
   text-align:right
}

a{
    text-decoration:none;
    color: #293845;
}
li{
  list-style-type:none;
}
b{
  font-size: 18px;
}
`

export const Container = styled.div`
  
  max-width: 720px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.title`

font-size: 22px;
justify-content:center;
display: flex;
color: #ffffff;


`;