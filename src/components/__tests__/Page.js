import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, act } from "@testing-library/react";
import { navigate } from "hookrouter";
import Page from "../Page";
import Provider from "../Provider";

describe("The Page component", () => {
  test("should display different components based on route as it simply wraps the router", () => {
    const { getByText } = render(
      <Provider>
        <Page />
      </Provider>
    );

    act(() => {
      navigate("/");
    });
    const h1Element = getByText(/You have no columns selected/i);
    expect(h1Element).toBeInTheDocument();

    act(() => {
      navigate("/about");
    });
    const h3Element = getByText(/Hey, I'm Wayne/i);
    expect(h3Element).toBeInTheDocument();

    act(() => {
      navigate("/foo");
    });
    const oopsElement = getByText(/oops/i);
    expect(oopsElement).toBeInTheDocument();
  });
});
