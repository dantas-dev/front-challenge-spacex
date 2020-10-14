import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo1.png';
import { Container } from './styles';
 
function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo SpaceX"/>
      </Link>
    </Container>
  );
}

export default Header;