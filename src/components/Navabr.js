import { Link } from "react-router-dom";
import {  Container, Nav, NavbarBrand, Button } from "react-bootstrap";
import Loginimg from './Loginimg';
import { IoSearch } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function Navbar() 
{
    return(
        <Navbar expand="lg" className="white sticky-top">
            <Container className="p-1 p-md-2 bg-white">
                <NavbarBrand>
                    <Link to="/" ><Loginimg /></Link>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navabr-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} to="/" className="fw-bold">Home</Nav.Link>
                        <Nav.Link as={Link} to="/mans" className="fw-bold">Man's</Nav.Link>
                        <Nav.Link as={Link} to="/womens" className="fw-bold">Women's</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link className="mt-2" ><FaFacebook /> <FaInstagram /> <FaInstagram /> <FaInstagram /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}