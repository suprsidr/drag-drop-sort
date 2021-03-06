import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import createPersistedState from "use-persisted-state";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { navigate } from "hookrouter";
import { savedState } from "./Provider";

import "./appNavBar.scss";

const useThemeState = createPersistedState("theme");

const AppNavBar = () => {
  const [theme, setTheme] = useThemeState("light");
  const saved = useRecoilValue(savedState);

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.body.classList.add("dark");
        break;
      case "light":
        document.body.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  const goto = (e, path) => {
    e.preventDefault();
    navigate(path);
  };
  return (
    <Navbar variant={theme} bg={theme} fixed="top">
      <Nav className="mr-auto">
        <Nav.Link href="/" onClick={(e) => goto(e, "/")}>
          Home
        </Nav.Link>
        <Nav.Link href="/about" onClick={(e) => goto(e, "/about")}>
          About
        </Nav.Link>
        {saved.visibleColumns.length > 0 && (
          <Nav.Link href="/results" onClick={(e) => goto(e, "/results")}>
            Results
          </Nav.Link>
        )}
      </Nav>
      <Form inline>
        <Form.Check
          type="switch"
          id="theme-switch"
          label="Light/Dark"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </Form>
    </Navbar>
  );
};

export default AppNavBar;
