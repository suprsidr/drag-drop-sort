import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Router from "./Router";
import AppNavBar from "./AppNavBar.js";
import { Container as ColumnContainer } from "./column-setup/Container";

import { columnState, modalToggle } from "./Provider";

const Page = () => {
  const state = useRecoilValue(columnState);
  const [show, setShow] = useRecoilState(modalToggle);
  return (
    <Container className="p-3">
      <Row style={{ marginBottom: "72px" }}>
        <Col>
          <AppNavBar />
        </Col>
      </Row>
      <Router />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Configure Data Fields
            <p>Drag and drop between columns to configure visible data.</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <ColumnContainer {...state} />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)} variant="primary">
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Page;
