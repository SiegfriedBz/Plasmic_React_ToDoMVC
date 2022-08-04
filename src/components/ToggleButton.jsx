import * as React from "react";
import { PlasmicToggleButton } from "./plasmic/copy_of_todo_mvc/PlasmicToggleButton";

function ToggleButton_({selected, onClick, state,...rest}, ref) {

  return <PlasmicToggleButton 
    root={{ ref }} {...rest} 
    state={selected ? "selected" : undefined}
    onClick={onClick}
    />;
}

const ToggleButton = React.forwardRef(ToggleButton_);

export default ToggleButton;
