import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from './column-setup/Container';
import "./homePage.scss";

import { initialState, savedState } from "./Provider";

const HomePage = () => {

  const state = useRecoilValue(initialState);
  const saved = useRecoilValue(savedState);

  const [show, setShow] = useState(false);

  return (
    <>
      <Row>
        <Col className="text-center">
          <h1>You have no columns selected</h1>
          <h2 onClick={() => setShow(!show)} >click to open settings</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Result:</h1>
          <pre>
            <code>
              {JSON.stringify(saved, null, 2)}
            </code>
          </pre>
        </Col>
      </Row>
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
                <Container {...state} />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)} variant="primary">Save</Button>
            <Button onClick={() => setShow(false)} variant="secondary">Cancel</Button>
          </Modal.Footer>
        </Modal>
    </>
  );
};

export default HomePage;
