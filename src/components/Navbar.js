import { Link } from "react-router-dom";
import {  Container, Nav, NavbarBrand, Navbar } from "react-bootstrap";
import Loginimg from './Loginimg';


export default function Navigationbar() 
{
    return(
        <Navbar expand="lg" className="bg sticky-top shadow">
            <Container className="p-1 p-md-2">
                <NavbarBrand>
                    <Link to="/" ><Loginimg /></Link>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navabr-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} to="/" className="accent sm">Home</Nav.Link>
                        <Nav.Link as={Link} to="/mans" className="accent sm">Man's</Nav.Link>
                        <Nav.Link as={Link} to="/womens" className="accent sm">Women's</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}