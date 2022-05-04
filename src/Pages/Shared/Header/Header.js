import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <header>
            <Navbar className="header-bg" collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className="brand-logo" src={logo} alt="Brand Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#inventories">Inventories</Nav.Link>
                            <Nav.Link href="home#faq">Faq</Nav.Link>
                            <Nav.Link href="home#member">Member</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                <button style={{color: '#fff', borderRadius: '5px', fontWeight: 'bold', padding: '10px', boxShadow: '0 0 5px #222'}} className='logout-btn btn btn-link text-decoration-none' onClick={handleSignOut}>LogOut</button>
                                :
                                <Nav.Link style={{color: '#fff', borderRadius: '5px', fontWeight: 'bold', padding: '10px', boxShadow: '0 0 5px #222'}} className='login-btn' as={Link} to="login">LogIn</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
