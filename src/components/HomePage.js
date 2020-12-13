import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Results from "./Results";
import "./homePage.scss";

import { savedState, modalToggle } from "./Provider";

const HomePage = () => {
  const saved = useRecoilValue(savedState);

  const [show, setShow] = useRecoilState(modalToggle);

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
      <Results />
    </>
  );
};

export default HomePage;
