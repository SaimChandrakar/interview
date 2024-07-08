import { Card, Col, Row, Form, Button, Container} from "react-bootstrap";
import login from '../assets/images/login.webp';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
})
export default function Login()
{
    return(
       <Container>
        <Card className="shadow my-5 border-0 rounded-0 p-5">
            <Row>
                <Col xs={12} lg={6} className="h-100">
                    <img src={login} alt="Login" className="img-fluid"/>
                </Col>
                <Col xs={12} lg={6} className="h-100 my-auto">
                    <h2 className="text-center">Login</h2>
                    <form>
                        <Form.Control className="mt-4 p-3" name="email" type="email" placeholder="Enter email" />
                        <Form.Control className="mt-4 p-3" name="password" type="password" placeholder="Enter Password" />
                        <Form.Label className="float-end mt-4">Forgot Password</Form.Label>
                        <Button className="mt-4 form-control" variant="outline-dark" size="lg">
                            Login
                        </Button>
                    </form>
                </Col>
            </Row>
        </Card>
       </Container>
    )
}