import { Col, Container, Row, Card } from "react-bootstrap";
import img5 from '../assets/images/img5.png';
import Searchbar from "./Searchbar";


export default function Womens()
{
    return(
        <Container className="my-5">
            <Searchbar/>
            <Row>
                <Col xs={12} md={6} lg={3}>
                    <Card className="border-0 rounded-0">
                        <Card.Img className="rounded-0" variant="top" src={img5} />
                        <Card.Text className="mt-3 h6 fw-normal">Men Printed-Shirt</Card.Text>
                        <Card.Text className="mt-2 h6 fw-normal d-flex gap-2"><del className="text-muted">$599</del> <span className="fw-bold">$399</span></Card.Text>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Card className="border-0 rounded-0">
                        <Card.Img className="rounded-0" variant="top" src={img5} />
                        <Card.Text className="mt-3 h6 fw-normal">Men Printed-Shirt</Card.Text>
                        <Card.Text className="mt-2 h6 fw-normal d-flex gap-2"><del className="text-muted">$599</del> <span className="fw-bold">$399</span></Card.Text>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Card className="border-0 rounded-0">
                        <Card.Img className="rounded-0" variant="top" src={img5} />
                        <Card.Text className="mt-3 h6 fw-normal">Men Printed-Shirt</Card.Text>
                        <Card.Text className="mt-2 h6 fw-normal d-flex gap-2"><del className="text-muted">$599</del> <span className="fw-bold">$399</span></Card.Text>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Card className="border-0 rounded-0">
                        <Card.Img className="rounded-0" variant="top" src={img5} />
                        <Card.Text className="mt-3 h6 fw-normal">Men Printed-Shirt</Card.Text>
                        <Card.Text className="mt-2 h6 fw-normal d-flex gap-2"><del className="text-muted">$599</del> <span className="fw-bold">$399</span></Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}