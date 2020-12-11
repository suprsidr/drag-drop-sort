import React from "react";
import { useRoutes } from "hookrouter";

import HomePage from "./HomePage";
import About from "./About";
import NotFound from "./NotFound";

const Router = () => {
  /* eslint-disable */
  const routes = {
    "/": () => <HomePage />,
    "/about": () => <About />,
  };
  /* eslint-enable */

  const routeResult = useRoutes(routes);

  return routeResult || <NotFound />;
};

export default Router;
