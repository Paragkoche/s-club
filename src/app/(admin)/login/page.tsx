"use client";
import React from "react";
import Hero from "@/static/hero.png";
import {
  Button,
  Card,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
} from "react-bootstrap";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Page = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${Hero.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="d-flex  justify-content-center align-items-center w-100 h-100"
    >
      <Card className="w-3">
        <Card.Header>
          <Card.Text>Admin Login</Card.Text>
        </Card.Header>
        <Card.Body>
          <Form className="p-5">
            <Form.Group className="my-3">
              <FloatingLabel label="Email" controlId="Email-label">
                <Form.Control
                  id="Email-label"
                  placeholder="-"
                  type="email"
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>
            <InputGroup className="my-3">
              <FloatingLabel label="Password" controlId="Password-label">
                <Form.Control
                  id="Password-label"
                  placeholder="-"
                  type={showPassword ? "text" : "password"}
                ></Form.Control>
              </FloatingLabel>
              <InputGroup.Text
                id="inputGroup-sizing-sm"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword((prv) => !prv)}
              >
                {showPassword ? (
                  <AiOutlineEye></AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                )}
              </InputGroup.Text>
            </InputGroup>
            <Button className="w-100">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Page;
