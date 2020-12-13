import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";
import Container from "../column-setup/Container";
import Provider, { savedState } from "../Provider";

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
    const { getByText } = render(
      <RecoilRoot
        initializeState={(snap) =>
          snap.set(savedState, {
            visibleColumns: ["china", "unitedStates"],
            fixedColumns: 0,
          })
        }
      >
        <Container {...props} />
      </RecoilRoot>
    );

    expect(getByText(/United States/i)).toBeInTheDocument();
  });
});
