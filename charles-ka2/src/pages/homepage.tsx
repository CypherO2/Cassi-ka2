import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

function HomePage() {
  useEffect(() => {
    document.title = "KA2 - Homepage";
  });
  return (
    <>
      <Row>
        <Col>
          <h1 className="text-dark text-center">Homepage</h1>
          <h5 className="text-center text-secondary">
            Welcome to this site's Home!
          </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-center text-secondary">Paragraph 1: </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Venenatis a condimentum vitae sapien pellentesque habitant morbi
            tristique. Massa sapien faucibus et molestie. Facilisi nullam
            vehicula ipsum a arcu cursus vitae. Egestas purus viverra accumsan
            in nisl nisi scelerisque. Turpis massa sed elementum tempus egestas
            sed sed risus pretium. Vestibulum rhoncus est pellentesque elit
            ullamcorper dignissim. Neque laoreet suspendisse interdum
            consectetur libero id faucibus. Viverra ipsum nunc aliquet bibendum
            enim. Faucibus turpis in eu mi bibendum neque egestas congue.
            Maecenas accumsan lacus vel facilisis volutpat est velit. Odio
            facilisis mauris sit amet massa vitae. Orci a scelerisque purus
            semper eget duis at tellus. Posuere sollicitudin aliquam ultrices
            sagittis orci a scelerisque purus semper.
          </p>
        </Col>
        <Col>
          <h3 className="text-center text-secondary">Paragraph 2: </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Venenatis a condimentum vitae sapien pellentesque habitant morbi
            tristique. Massa sapien faucibus et molestie. Facilisi nullam
            vehicula ipsum a arcu cursus vitae. Egestas purus viverra accumsan
            in nisl nisi scelerisque. Turpis massa sed elementum tempus egestas
            sed sed risus pretium. Vestibulum rhoncus est pellentesque elit
            ullamcorper dignissim. Neque laoreet suspendisse interdum
            consectetur libero id faucibus. Viverra ipsum nunc aliquet bibendum
            enim. Faucibus turpis in eu mi bibendum neque egestas congue.
            Maecenas accumsan lacus vel facilisis volutpat est velit. Odio
            facilisis mauris sit amet massa vitae. Orci a scelerisque purus
            semper eget duis at tellus. Posuere sollicitudin aliquam ultrices
            sagittis orci a scelerisque purus semper.
          </p>
        </Col>
      </Row>
      <Row className="border border-danger my-5">
        <h1 className="text-danger text-center my-5 py-5">End Of Page</h1>
      </Row>
    </>
  );
}
export default HomePage;
