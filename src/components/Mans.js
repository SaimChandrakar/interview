import { Col, Container, Row, Card } from "react-bootstrap";
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import Searchbar from "./Searchbar";

export default function Mans()
{
    return(
        <Container className="my-5">
            <Searchbar/>
           <Row>
            <Col xs={12} md={6} lg={3}>
                <Card className="border-0 rounded-0">
                    <Card.Img className="rounded-0" variant="top" src={img1} />
                    <Card.Text className="mt-3 h6 fw-normal">Men Printed-Shirt</Card.Text>
                    <Card.Text className="mt-2 h6 fw-normal d-flex gap-2"><del className="text-muted">$599</del> <span className="fw-bold">$399</span></Card.Text>
                </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
                <Card className="border-0 rounded-0">
                    <Card.Img className="rounded-0" variant="top" src={img2} />
                    <Card.Text className="mt-3 h6 fw-normal">Men Printed-Shirt</Card.Text>
                    <Card.Text className="mt-2 h6 fw-normal d-flex gap-2"><del className="text-muted">$599</del> <span className="fw-bold">$399</span></Card.Text>
                </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
                <Card className="border-0 rounded-0">
                    <Card.Img className="rounded-0" variant="top" src={img1} />
                    <Card.Text className="mt-3 h6 fw-normal">Men Printed-Shirt</Card.Text>
                    <Card.Text className="mt-2 h6 fw-normal d-flex gap-2"><del className="text-muted">$599</del> <span className="fw-bold">$399</span></Card.Text>
                </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
                <Card className="border-0 rounded-0">
                    <Card.Img className="rounded-0" variant="top" src={img2} />
                    <Card.Text className="mt-3 h6 fw-normal">Men Printed-Shirt</Card.Text>
                    <Card.Text className="mt-2 h6 fw-normal d-flex gap-2"><del className="text-muted">$599</del> <span className="fw-bold">$399</span></Card.Text>
                </Card>
            </Col>
           </Row>
        </Container>
    )
}