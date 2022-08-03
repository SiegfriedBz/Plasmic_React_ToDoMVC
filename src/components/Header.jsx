import * as React from "react";
import { PlasmicHeader } from "./plasmic/copy_of_todo_mvc/PlasmicHeader";

function Header_(props, ref) {

  return <PlasmicHeader headerContainer={{ ref }} {...props} />;
}

const Header = React.forwardRef(Header_);

export default Header;
