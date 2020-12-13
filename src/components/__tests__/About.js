import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import About from "../About";
import Provider from "../Provider";

describe("The About component", () => {
  test("should display", () => {
    const { getByText } = render(
      <Provider>
        <About />
      </Provider>
    );

    const h3Element = getByText(/Hey, I'm Wayne/i);
    expect(h3Element).toBeInTheDocument();
  });
});
