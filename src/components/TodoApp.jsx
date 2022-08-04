import React, { useState } from "react";
import { PlasmicTodoApp } from "./plasmic/copy_of_todo_mvc/PlasmicTodoApp";
import Task from "./Task"

function TodoApp_({entries, handleAdd, handleChange, handleDelete, handleClear, ...rest}, ref) {

  const [showFilter, setShowFilter] = useState("all")

  let shownEntries = entries.filter(e => {
    return showFilter === 'active' ? !e.done : showFilter === 'completed' ? e.done : true
  })

  console.log(shownEntries)

  return <PlasmicTodoApp 
    root={{ ref }} {...rest} 
    appTitle={{
      children: "Plasmic ToDoz",
    }}
    header={{
      state:
        entries.length === 0 ?
        "empty" :
        entries.every((e) => e.done) ?
        "allChecked" :
        undefined,
      handleAdd: (text) => handleAdd(text)
    }}
    tasksContainer={{
      children: shownEntries.map(entry => {
        return (
          <Task 
            entry={entry}
            handleChange={handleChange}
            handleDelete={handleDelete}
          ></Task>
        )
    })}}
    footer={{
      showFilter,
      setShowFilter,
      handleClear,
      count: entries.filter(entry => !entry.done).length
    }}
    />;
}

const TodoApp = React.forwardRef(TodoApp_);

export default TodoApp;
