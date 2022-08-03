import * as React from "react";
import { PlasmicFooter } from "./plasmic/copy_of_todo_mvc/PlasmicFooter";

function Footer_(props, ref) {

  return <PlasmicFooter footerContainer={{ ref }} {...props} />;
}

const Footer = React.forwardRef(Footer_);

export default Footer;
