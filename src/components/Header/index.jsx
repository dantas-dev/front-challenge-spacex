import React from 'react'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

function Header(props){
    return(
        <Nav className="navbar">
                <Nav.Item  className="navbar-brand">
                    <Nav.Link className="nav-title" href="#/">
                        <FontAwesomeIcon icon={faRocket} />
                        <h1>Launches</h1>
                    </Nav.Link> 
                </Nav.Item>
        </Nav>
    )
}

export default Header