import React from "react";
import { useRoutes } from "hookrouter";

import HomePage from "./HomePage";
import About from "./About";
import Results from "./Results";
import NotFound from "./NotFound";

const Router = () => {
  /* eslint-disable */
  const routes = {
    "/": () => <HomePage />,
    "/about": () => <About />,
    "/results": () => <Results />,
  };
  /* eslint-enable */

  const routeResult = useRoutes(routes);

  return routeResult || <NotFound />;
};

export default Router;
