import React from 'react';
import { Link} from 'react-router-dom';
import {Navbar, Nav } from 'react-bootstrap';
import img1 from '../../assets/images/main.png';
import '../../assets/styles/header.css';

function Header(){
    return (
        <div className="header">
            <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={img1}
                width="100"
                height="50"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav >
                    <Nav.Item >
                    <Nav.Link as={Link} to="/" >About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link as={Link} eventKey="link-1"to={{
                                pathname: '/create',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}><button>Search</button> </Nav.Link>
                    </Nav.Item>
                 </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;