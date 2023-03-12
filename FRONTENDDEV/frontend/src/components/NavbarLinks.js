import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarLinks = () => {
  return (
    <div>
      <Navbar className="py-4" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Bryant's HW2</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="#">Get Points</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarLinks;
