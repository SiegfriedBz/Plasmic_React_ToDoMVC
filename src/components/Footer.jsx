import React, { useState } from "react";
import { PlasmicFooter } from "./plasmic/copy_of_todo_mvc/PlasmicFooter";

function Footer_({ showFilter, setShowFilter, handleClear, ...rest }, ref) {

  return <PlasmicFooter 
    footerContainer={{ ref }} {...rest}
    allToggle={{
      selected: showFilter === "all",
      onClick: () => setShowFilter("all")
    }}
    completedToggle={{
      selected: showFilter === "completed",
      onClick: () => setShowFilter("completed")
    }}
    activeToggle={{
      selected: showFilter === "active",
      onClick: () => setShowFilter("active")
    }}
    clearBtn={{
      onClick: handleClear
    }}

    />;
}

const Footer = React.forwardRef(Footer_);

export default Footer;
