import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import AppNavBar from "../AppNavBar";
import Provider from "../Provider";

describe("The AppNavBar component", () => {
  test("should display home link", () => {
    const { container } = render(
      <Provider>
        <AppNavBar />
      </Provider>
    );

    expect([...container.querySelectorAll("a")][0]).toHaveTextContent(/home/i);
  });
});
