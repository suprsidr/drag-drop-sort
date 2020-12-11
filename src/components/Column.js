import React, { useState } from "react";
import ListItem from "./ListItem";
import { Droppable } from "react-beautiful-dnd";
import "./column.scss";

const Column = ({ col: { list, id, lockable } }) => {
  const [lockIndex, setLockIndex] = useState(null);

  const noop = () => {};

  return (
    <Droppable droppableId={id}>
      {({ droppableProps, innerRef, placeholder }) => (
        <div className="column">
          <h2>{id}</h2>
          <div
            className="list"
            {...droppableProps}
            ref={innerRef}
          >
            {list.map(({ id, name }, i) => (
              <ListItem
                key={id}
                id={id}
                text={name}
                index={i}
                locked={lockIndex && i <= lockIndex}
                setLockIndex={lockable ? setLockIndex : noop}
              />
            ))}
            {placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Column;
