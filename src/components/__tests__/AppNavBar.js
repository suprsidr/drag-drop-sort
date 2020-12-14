import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";
import AppNavBar from "../AppNavBar";
import Provider, { savedState } from "../Provider";

describe("The AppNavBar component", () => {
  test("should display home link", () => {
    const { container } = render(
      <Provider>
        <AppNavBar />
      </Provider>
    );

    expect([...container.querySelectorAll("a")][0]).toHaveTextContent(/home/i);
  });

  test("should show results link when visible columns are selected", () => {
    const { container } = render(
      <RecoilRoot
        initializeState={(snap) =>
          snap.set(savedState, {
            visibleColumns: ["china", "unitedStates"],
            fixedColumns: 0,
          })
        }
      >
        <AppNavBar />
      </RecoilRoot>
    );

    expect([...container.querySelectorAll("a")][2]).toHaveTextContent(/results/i);
  });
});
