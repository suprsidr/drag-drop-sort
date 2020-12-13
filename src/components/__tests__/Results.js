import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";
import Results from "../Results";
import Provider, { savedState } from "../Provider";

describe("The Results component", () => {
  test("should not crash", () => {
    const { getByTestId } = render(
      <Provider>
        <Results />
      </Provider>
    );

    expect(getByTestId("no-results")).toBeInTheDocument();
  });

  test("should display chart", () => {
    const { getByText } = render(
      <RecoilRoot
        initializeState={(snap) =>
          snap.set(savedState, {
            visibleColumns: ["china", "unitedStates"],
            fixedColumns: 0,
          })
        }
      >
        <Results />
      </RecoilRoot>
    );

    expect(getByText(/china/i)).toBeInTheDocument();
    expect(getByText(/united States/i)).toBeInTheDocument();
  });
});
