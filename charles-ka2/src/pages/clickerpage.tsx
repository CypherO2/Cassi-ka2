import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Biscuit from "../assets/biscuitClicker.png";
import countTracker from "../hooks/countTracker";

function ClickerPage() {
  useEffect(() => {
    document.title = "KA2 - Biscuit Clicker";
  });
  const { count, setCount } = countTracker();
  return (
    <>
      <Row>
        <Col></Col>
        <Col className="my-5 py-5">
          <img
            src={Biscuit}
            alt=""
            className=""
            onClick={() => setCount(count + 1)}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <h1>Cookies: {count}</h1>
        </Col>
      </Row>
    </>
  );
}
export default ClickerPage;

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <div>{count}</div>
//       <button type="button" onClick={() => setCount(count + 1)}>
//         Count me!
//       </button>
//     </>
//   );
