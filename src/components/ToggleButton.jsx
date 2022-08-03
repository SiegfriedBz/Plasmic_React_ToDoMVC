import * as React from "react";
import { PlasmicToggleButton } from "./plasmic/copy_of_todo_mvc/PlasmicToggleButton";

function ToggleButton_(props, ref) {

  return <PlasmicToggleButton root={{ ref }} {...props} />;
}

const ToggleButton = React.forwardRef(ToggleButton_);

export default ToggleButton;
