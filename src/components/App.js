import React from "react";
import Provider from "./Provider";
import Page from "./Page";
// Importing Sass with Bootstrap CSS
import "./app.scss";

const App = () => {
  return (
    <Provider>
      <Page />
    </Provider>
  );
};

export default App;
