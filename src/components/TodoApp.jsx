import * as React from "react";
import { PlasmicTodoApp } from "./plasmic/copy_of_todo_mvc/PlasmicTodoApp";
import Task from "./Task"

function TodoApp_({entries, handleChange, handleDelete, ...rest}, ref) {

  console.log(entries)

  return <PlasmicTodoApp 
    root={{ ref }} {...rest} 
    appTitle={{
      children: "My ToDoz",
    }}
    tasksContainer={{
      children: entries.map(entry => {
        return (
          <Task 
            entry={entry}
            handleChange={handleChange}
            handleDelete={handleDelete}
          ></Task>
        )
    })}}
    />;
}

const TodoApp = React.forwardRef(TodoApp_);

export default TodoApp;
