import { Navbar, Container, Nav } from "react-bootstrap";
import useCountTracker from "../hooks/countTracker";
import multiplerTracker from "../hooks/multiplierTracker";

function CookieNav() {
  const { count } = useCountTracker();
  return (
    <>
      <Navbar className="sticky-top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <b>Biscuit Clicker</b>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/biscuit">Biscuit Clicker</Nav.Link>
            <Nav.Link href="/temp">Temp Check</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Cookies: {count}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default CookieNav;
