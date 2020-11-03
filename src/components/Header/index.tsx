
import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../utils/logo2.png';



const Header: React.FC = () => (
  <Container>
    <header>
     
      <nav>
       
        <Link to="/">  
        <img alt = "logo"src = {logo}></img>
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;