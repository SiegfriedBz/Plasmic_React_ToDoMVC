import * as React from "react";
import { PlasmicTask } from "./plasmic/copy_of_todo_mvc/PlasmicTask";

function Task_(props, ref) {

  return <PlasmicTask root={{ ref }} {...props} />;
}

const Task = React.forwardRef(Task_);

export default Task;
