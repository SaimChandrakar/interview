import { Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { HiBars3BottomLeft } from "react-icons/hi2";

export default function Searchbar()
{
    return(
        <Container className="mb-5">
            <Row className="d-flex w-50">
                <InputGroup className="p-0">
                    <Form.Control
                    className="border-end-0 p-3 rounded-0"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text className="bg-white rounded-0" id="basic-addon1"><IoSearch /></InputGroup.Text>
                    {/* <HiBars3BottomLeft className="h3 mt-2 float-end"/> */}
                </InputGroup>
            </Row>
        </Container>
    )
}