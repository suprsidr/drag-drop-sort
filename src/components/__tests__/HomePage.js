import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../HomePage";
import Provider from "../Provider";

describe("The HomePage component", () => {
  test("should not crash", () => {
    const { getByText } = render(
      <Provider>
        <HomePage />
      </Provider>
    );

    const h1Element = getByText(/You have no columns selected/i);
    expect(h1Element).toBeInTheDocument();
  });
});
