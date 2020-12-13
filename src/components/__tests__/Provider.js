import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Provider, { columnState } from "../Provider";
import { useRecoilValue } from "recoil";

import { populationData } from "../../data";

const TestApp = () => {
  const state = useRecoilValue(columnState);

  return <h3>{state.availableColumns.length}</h3>;
};

describe("The Provider component", () => {
  test("should render children providing state", () => {
    const { container } = render(
      <Provider>
        <TestApp />
      </Provider>
    );
    expect(container.querySelector("h3")).toHaveTextContent(
      Object.keys(populationData).length
    );
  });
});
