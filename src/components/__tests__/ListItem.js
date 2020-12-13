import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListItem from "..//column-setup/ListItem";

const noop = () => {};

describe("The ListItem component", () => {
  test("should not crash", () => {
    const { getByText } = render(
      <DragDropContext onDragEnd={noop}>
        <Droppable droppableId="something">
          {({ droppableProps, innerRef, placeholder }) => (
            <div className="column">
              <div className="list" {...droppableProps} ref={innerRef}>
                <ListItem
                  id="unitedStates"
                  text="United States"
                  index={0}
                  locked={false}
                  setLockIndex={noop}
                />
                {placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );

    expect(getByText(/United States/i)).toBeInTheDocument();
  });
});
