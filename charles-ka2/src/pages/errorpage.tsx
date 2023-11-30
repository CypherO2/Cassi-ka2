import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

function ErrorPage() {
  useEffect(() => {
    document.title = "KA2 - Error 404";
  });
  return (
    <>
      <Row className="my-5 py-5"></Row>
      <Row>
        <Col></Col>
        <Col className="pt-5 mt-5">
          <h1 className="text-center pt-5 mt-1">
            Error <b>404</b>:
          </h1>
          <h2 className="text-secondary text-center">
            Page Not Found
          </h2>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
export default ErrorPage;
