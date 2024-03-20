import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate, to }) => {
    console.log("tototo", to);
    const navigate = useNavigate();
    const login = (event) => {
        // preventDefault : 페이지가 계속 리프레쉬되는것을 막아줄수 있다
        event.preventDefault();
        setAuthenticate(true);
        // 로그인이 되면 메인페이지로 이동하게 된다
        navigate("/");
    };
    return (
        <Container className="login-area">
            <Form className="login-form" onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;