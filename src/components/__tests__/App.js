import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import Provider from "../Provider";

describe("The App component", () => {
  test("should not crash", () => {
    const { getByText } = render(
      <Provider>
        <App />
      </Provider>
    );

    const h1Element = getByText(/You have no columns selected/i);
    expect(h1Element).toBeInTheDocument();
  });
});
