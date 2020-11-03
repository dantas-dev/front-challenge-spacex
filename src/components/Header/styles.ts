import styled from 'styled-components';


export const Container = styled.div`
  background: #b8cad4;
  padding: 20px 0;
  header {
    width: 1120px;
    margin: 0 auto;
    
   
    align-items: center;
    justify-content: space-between;
    
    img{
      width: 300px;
    }
    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;