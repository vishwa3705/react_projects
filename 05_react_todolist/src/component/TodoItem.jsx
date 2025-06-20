import { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
  RiIndeterminateCircleLine,
} from "react-icons/ri";

function TodoItem({ task }) {
  const [done, setDone] = useState(false);
  const [iconType, setIconType] = useState("blank"); // 'blank' or 'checked'

  const handleIconClick = () => {
    setIconType((prev) => (prev === "blank" ? "checked" : "blank"));
  };

  return (
    <div className="list">
      <br />
      <ul>
        <li>
          {iconType === "checked" ? (
            <RiCheckboxCircleLine onClick={handleIconClick} />
          ) : (
            <RiCheckboxBlankCircleLine onClick={handleIconClick} />
          )}
          {task}
          <RiIndeterminateCircleLine />
        </li>
      </ul>
    </div>
  );
}

export default TodoItem;
