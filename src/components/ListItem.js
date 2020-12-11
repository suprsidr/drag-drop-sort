import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaGripVertical, FaLock } from "react-icons/fa";
import "./listItem.scss";

const ListItem = ({ id, text, index, locked, setLockIndex }) => {
  let timer;
  let delay = 200;
  let prevent = false;

  const handleClick = () => {
    timer = setTimeout(function () {
      if (!prevent) {
        // handle single click here
      }
      prevent = false;
    }, delay);
  };

  const handleDoubleClick = (i, locked) => {
    clearTimeout(timer);
    prevent = true;
    const newIndex = locked ? i - 1 : i;
    setLockIndex(newIndex < 0 ? null : newIndex);
  };

  return (
    <Draggable draggableId={id} index={index} isDragDisabled={locked}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <div
          onDoubleClick={() => handleDoubleClick(index, locked)}
          onClick={handleClick}
          className="list-item"
          ref={innerRef}
          {...draggableProps}
        >
          {!locked && (
            <div {...dragHandleProps}>
              <FaGripVertical />
            </div>
          )}
          {locked && (
            <div className="lock">
              <FaLock />
            </div>
          )}
          <div>{text}</div>
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
