import * as React from "react";
import { PlasmicTodoApp } from "./plasmic/copy_of_todo_mvc/PlasmicTodoApp";

function TodoApp_(props, ref) {

  return <PlasmicTodoApp 
    root={{ ref }} {...props} 
    appTitle={{
      children: "My ToDoz",
      onClick: () => {alert("Hello from ToDo")}
    }}
    />;
}

const TodoApp = React.forwardRef(TodoApp_);

export default TodoApp;
