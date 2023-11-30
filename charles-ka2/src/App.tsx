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
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <CookieNav />
      <Container>
        <Routes>
          <Route path={INDEX_PATH} element={<HomePage />} />
          <Route path={CLICKER_PATH} element={<ClickerPage />} />
          <Route path={TEMP_PATH} element={<TemperaturePage />} />
          <Route path={NOT_FOUND_PATH} element={<ErrorPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
