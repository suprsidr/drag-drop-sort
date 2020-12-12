import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./about.scss";

export default function About() {
  return (
    <>
      <Row>
        <Col>
          <h3>Hey, I'm Wayne</h3>
          <p>Software Engineer located in the Indianapolis Area.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>This app is the product of a code challenge.</h4>
          <p>Requirements:</p>
          <ul>
            <li>
              Please create Column Setup component according to this design:
              <img src="/component.jpg" alt="Component preview" width="800" />
            </li>
            <li>
              The component should take three parameters:
              <ol>
                <li>
                  available columns: an array of objects, each item is an object
                  with &quot;id&quot; string property for unique identification
                  and &quot;name&quot; string property for displaying like
                  &#123; id: &quot;startTime&quot;, name: &quot;Start Time&quot;
                  &#125;
                </li>
                <li>
                  visible columns: an array of strings, each string is a
                  reference to id property of previous array;
                </li>
                <li>
                  and a number of fixed columns (fixed columns are shown with a
                  lock icon)
                </li>
              </ol>
            </li>
            <li>
              Users can drag-n-drop columns between lists and inside lists for
              reordering. A double click on an icon in the visible column should
              mark it and all previous columns as fixed columns. Double click on
              an already fixed column should reset the fixed status from that
              column and all next columns.
            </li>
            <li>
              The save button should raise an event with the resulting array of
              ids of the visible columns and a new number of fixed columns.
            </li>
            <li>
              The component should be implemented as a React.JS component with
              usage of react-bootstrap and any other open source library (except
              jQuery) with more than 50 stars on Github.
            </li>
            <li>
              Look-n-feel should reproduce the picture as close as possible
              (LESS is preferable).
            </li>
            <li>
              The project should be organized as a Node.js project with gulp for
              building. The main web-page should be a demo page for the
              component.
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>I overshot the goal a bit.</h4>
          <p>
            I tend to have fun building apps like this and get carried away.
          </p>
          <p>Extras:</p>
          <ul>
            <li>Persistant data mutations</li>
            <li>
              Used{" "}
              <a href="https://recoiljs.org/" title="Recoil.js">
                Recoil.js
              </a>{" "}
              - a new way of managing state in React apps
            </li>
            <li>Theme switcher.</li>
            <li>
              <a href="https://www.highcharts.com/" title="HighCharts">
                HighCharts
              </a>
            </li>
            <li>
              Hosted on{" "}
              <a href="https://www.netlify.com/" title="Netlify">
                Netlify
              </a>
            </li>
          </ul>
          <p>
            Find the{" "}
            <a
              href="https://github.com/suprsidr/drag-drop-sort"
              title="drag-drop-sort"
            >
              repo
            </a>{" "}
            on Github.
          </p>
        </Col>
      </Row>
    </>
  );
}
