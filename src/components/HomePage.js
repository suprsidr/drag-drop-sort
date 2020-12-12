import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "./column-setup/Container";
import Results from "./Results";
import "./homePage.scss";

import { columnState, savedState } from "./Provider";

const HomePage = () => {
  const state = useRecoilValue(columnState);
  const saved = useRecoilValue(savedState);

  const [show, setShow] = useState(false);

  return (
    <>
      {saved.visibleColumns.length === 0 && (
        <Row>
          <Col className="text-center">
            <h1>You have no columns selected</h1>
            <a
              href="edit"
              onClick={(e) => {
                e.preventDefault();
                setShow(!show);
              }}
            >
              click here to open settings
            </a>
          </Col>
        </Row>
      )}
      {saved.visibleColumns.length > 0 && (
        <Row>
          <Col>
            <div className="text-right">
              <a
                href="edit"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(!show);
                }}
              >
                Edit
              </a>
            </div>
            <Results {...saved} />
          </Col>
        </Row>
      )}
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
          <Button onClick={() => setShow(false)} variant="primary">
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomePage;
