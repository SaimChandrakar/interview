import { Link } from "react-router-dom";
import { Container, Nav, NavbarBrand, Button, Row, Col } from "react-bootstrap";
import Loginimg from "./Loginimg";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() 
{
    return(
        <div className="bg-light">
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <Loginimg/>
                        {/* <Nav.Link className="mt-2" ><FaFacebook /> <FaInstagram /> <FaInstagram /> <FaInstagram /></Nav.Link> */}
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5 className="text-uppercase fw-bold">Help & Info</h5>
                        <Nav.Link className=" mt-4">Contact Us</Nav.Link>
                        <Nav.Link className="mt-2" >About</Nav.Link>
                        <Nav.Link className="mt-2">Get In Touch</Nav.Link>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5 className="text-uppercase fw-bold">Our Policies</h5>
                        <Nav.Link className=" mt-4">Privacy Policy</Nav.Link>
                        <Nav.Link className="mt-2" >Return Policy</Nav.Link>
                        <Nav.Link className="mt-2">Refund Policy</Nav.Link>
                        <Nav.Link className="mt-2">Term & Services</Nav.Link>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5 className="text-uppercase fw-bold">Our Services</h5>
                        <p className="mt-4">With utmost dedication, we seamlessly deliver these treasures to every corner of the globe, ensuring a hassle-free and delightful experience for all.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}