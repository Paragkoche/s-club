"use client";
import Link from "next/link";
import Icon from "@/static/icons/club-logo.jpg";
import Icon2 from "@/static/icons/club-logo-only.jpg";
import Image from "next/image";
import { Navbar as Nav, Nav as N, Container, Offcanvas } from "react-bootstrap";
const Navbar = () => {
  return (
    <Nav expand="lg" className="mb-3 p-3">
      <Container fluid>
        <Nav.Brand href="/">
          <Container>
            <Image className="img-fluid" src={Icon} alt="-" />
          </Container>
        </Nav.Brand>

        <Nav.Offcanvas className="me-auto" id="menu" placement="end">
          <Offcanvas.Header closeButton>
            <Nav.Brand href="/">
              <Image src={Icon2} alt="-" width={50} height={50} />
            </Nav.Brand>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <N className="justify-content-end flex-grow-1 pe-3">
              <N.Link href="/" className="fs-3 color-2-f">
                Home
              </N.Link>
              <N.Link href="/" className="fs-3 color-2-f">
                Event
              </N.Link>
            </N>
          </Offcanvas.Body>
        </Nav.Offcanvas>
        <Nav.Toggle aria-aria-controls="menu" />
      </Container>
    </Nav>
  );
};
export default Navbar;
