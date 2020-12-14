import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Container from "../column-setup/Container";
import Provider from "../Provider";

const props = {
  availableColumns: [
    { id: "china", name: "China" },
    { id: "india", name: "India" },
    { id: "unitedStates", name: "United States" },
  ],
  visibleColumns: [],
  fixedColumns: 0,
};

describe("The Container component", () => {
  test("should not crash", () => {
    const { getByText } = render(
      <Provider>
        <Container {...props} />
      </Provider>
    );

    expect(getByText(/United States/i)).toBeInTheDocument();
  });

  test("should show visible", () => {
    props.visibleColumns = [{ id: "indonesia", name: "Indonesia" }];
    const { getByText } = render(
      <Provider>
        <Container {...props} />
      </Provider>
    );

    expect(getByText(/Indonesia/i)).toBeInTheDocument();
  });
});
