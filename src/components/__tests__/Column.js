import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "..//column-setup/Column";

const noop = () => {};

const availableColumns = [
  { id: "china", name: "China" },
  { id: "india", name: "India" },
  { id: "unitedStates", name: "United States" },
];

const col = {
  id: "available",
  list: availableColumns,
  lockable: false,
};

describe("The ListItem component", () => {
  test("should not crash", () => {
    const { getByText } = render(
      <DragDropContext onDragEnd={noop}>
        <Column col={col} key={col.id} lockIndex={1} setLockIndex={noop} />
      </DragDropContext>
    );

    expect(getByText(/United States/i)).toBeInTheDocument();
  });
});
