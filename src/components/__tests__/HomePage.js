import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import HomePage from "../HomePage";
import Provider, { savedState } from "../Provider";

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

  test("should change when visible columns are selected", () => {
    const { getByText } = render(
      <RecoilRoot
        initializeState={(snap) =>
          snap.set(savedState, {
            visibleColumns: ["china", "unitedStates"],
            fixedColumns: 0,
          })
        }
      >
        <HomePage />
      </RecoilRoot>
    );

    const h1Element = getByText(/Great!/i);
    expect(h1Element).toBeInTheDocument();
  });
});
