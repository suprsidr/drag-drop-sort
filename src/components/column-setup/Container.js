import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import { savedState } from "../Provider";
import "./container.scss";

export const Container = ({
  availableColumns,
  visibleColumns,
  fixedColumns,
}) => {
  const setSavedState = useSetRecoilState(savedState);

  const initialColumns = {
    available: {
      id: "available",
      list: availableColumns.slice(),
      lockable: false,
    },
    visible: {
      id: "visible",
      list: visibleColumns.slice(),
      lockable: true,
    },
  };
  const [columns, setColumns] = useState(initialColumns);
  const [lockIndex, setLockIndex] = useState(fixedColumns);

  useEffect(() => {
    const { visible } = columns;
    setSavedState({
      visibleColumns: visible.list.map((item) => item.id),
      fixedColumns: lockIndex !== null ? lockIndex + 1 : 0,
    });
  }, [columns, lockIndex, setSavedState]);

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Don't allow re-order of locked
    if (
      initialColumns[destination.droppableId].lockable &&
      destination.index <= lockIndex
    )
      return null;

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
          <Column
            col={col}
            key={col.id}
            lockIndex={lockIndex}
            setLockIndex={setLockIndex}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Container;
