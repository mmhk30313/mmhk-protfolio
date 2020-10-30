import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [page, setPage] = useContext(UserContext);
    if(false){
        console.log(page);
    }
    return (
        <Container>
            <Navbar bg="transparent"  expand="lg">
                <Navbar.Brand className="id-brand">Md. Mehedi Hasan Khan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink onClick={() => setPage("home")} className="mr-3 nav-link" exact activeClassName="active"  to="/" >Home</NavLink>
                        <NavLink onClick={() => setPage("about")} className="mr-3 nav-link" exact activeClassName="active"  to="/about" >About</NavLink>
                        <NavLink onClick={() => setPage("works")} className="mr-3 nav-link" exact activeClassName="active"  to="/works" >Works</NavLink>
                        <NavLink onClick={() => setPage("blogs")} className="mr-3 nav-link" exact activeClassName="active"  to="/blog" >Blog</NavLink>
                        <NavLink onClick={() => setPage("contact")} className="mr-3 nav-link" exact activeClassName="active"  to="/contact" >Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;