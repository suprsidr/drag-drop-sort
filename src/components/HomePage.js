import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { A } from "hookrouter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      {saved.visibleColumns.length > 0 && (
        <Row>
          <Col className="text-center">
            <h1>Great!</h1>
            <p>
              Now go check your{" "}
              <A href="/results" title="results">
                results
              </A>
              .
            </p>
          </Col>
        </Row>
      )}
    </>
  );
};

export default HomePage;
