import { Routes, Route } from "react-router-dom";
import {
  CLICKER_PATH,
  INDEX_PATH,
  NOT_FOUND_PATH,
  TEMP_PATH,
} from "./constants/paths";
import { Container } from "react-bootstrap";
import HomePage from "./pages/homepage";
import ClickerPage from "./pages/clickerpage";
import TemperaturePage from "./pages/temppage";
import ErrorPage from "./pages/errorpage";
import CookieNav from "./components/Navbar";
import countTracker from "./hooks/countTracker";
import multiplerTracker from "./hooks/multiplierTracker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const Tempo = () => {
  const [count, setCount] = useState(0);

  const updateCount = (newCount: number) => {
    setCount(newCount);

  return (
    <>
      <CookieNav count={count} />
      <Container>
        <Routes>
          <Route path={INDEX_PATH} element={<HomePage />} />
          <Route path={CLICKER_PATH} element={<ClickerPage updateCount={updateCount}/>} />
          <Route path={TEMP_PATH} element={<TemperaturePage />} />
          <Route path={NOT_FOUND_PATH} element={<ErrorPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
