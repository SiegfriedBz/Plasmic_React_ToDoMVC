import React, { useState, useRef } from "react";
import { PlasmicTask } from "./plasmic/copy_of_todo_mvc/PlasmicTask";

function Task_({entry, handleChange, handleDelete, ...rest}, ref) {

  const [editing, setEditing] = useState(false)

  return <PlasmicTask 
    root={{ ref }} {...rest} 
    state={editing ? "editing" : entry.done ? "checked" : undefined}
    checkbox={{
      onClick: () => handleChange({id: entry.id, done: !entry.done}),
    }}
    label={{
      onDoubleClick: () => setEditing(true)
    }}
    textInput={{
      defaultValue: entry.descrip,
      onChange: (e) => handleChange({id: entry.id, descrip: e.target.value}),
      onBlur: () => setEditing(false),
      onKeyDown: (e) => {
        if(e.key === "Enter") {
          setEditing(false)
        }
      }
    }}
    deleteBtn={{
      onClick: () => handleDelete(entry.id)
    }}
    >
      {entry.descrip}
    </PlasmicTask>;
}

const Task = React.forwardRef(Task_);

export default Task;
