import React, { useState } from "react";
import { PlasmicHeader } from "./plasmic/copy_of_todo_mvc/PlasmicHeader";

function Header_({handleAdd, ...rest}, ref) {

  const [inputText, setInputText] = useState("")


  return <PlasmicHeader 
    headerContainer={{ ref }} {...rest} 
    textInput={{
      value: inputText, 
      onChange: (e) => setInputText(e.target.value),
      onKeyDown: (e) => {
        if(e.key === "Enter") {
          handleAdd(inputText)
          setInputText("")
        }
      }
    }}
    />;
}

const Header = React.forwardRef(Header_);

export default Header;
