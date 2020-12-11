import React, { useState } from "react";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.scss";

const initialItems = [
  { id: "startTime", name: "Start Time" },
  { id: "stopTime", name: "Stop Time" },
  { id: "perPoint", name: "Per Point" },
  { id: "initialMargin", name: "Initial Margin" },
  { id: "symbol&Description", name: "Symbol & Description" },
  { id: "change", name: "Change" },
  { id: "change%", name: "Change %" },
  { id: "last", name: "Last" },
  { id: "lastVolume", name: "Last Volume" },
  { id: "bid", name: "Bid" },
  { id: "bidSize", name: "Bid Size" },
  { id: "ask", name: "Ask" },
  { id: "askSize", name: "Ask Size" },
  { id: "totalVolume", name: "Total Volume" },
];

const App = () => {
  const initialColumns = {
    available: {
      id: "available",
      list: initialItems,
      lockable: false,
    },
    visible: {
      id: "visible",
      list: [],
      lockable: true,
    },
  };
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, i) => i !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        ...start,
        list: newList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, i) => i !== source.index);

      // Create a new start column
      const newStartCol = {
        ...start,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        ...end,
        list: newEndList,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="columns">
        {Object.values(columns).map((col) => (
          <Column col={col} key={col.id} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default App;
