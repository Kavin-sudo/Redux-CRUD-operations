import logo from "./logo.svg";
import "./App.css";
import { Navebar } from "./Components/Navebar";
import { Col, Container, Row } from "react-bootstrap";
import { AddTask } from "./Components/AddTask";
import TableContainer from "./Components/TableContainer";

function App() {
  return (
    <Container>
      <Navebar />{" "}
      <Row className="justify-content-md-center">
        <Col lg="2">
          <AddTask />
          <TableContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
