// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4i89zEd2mZSwh8sdV1ACi1
// Component: xkNjn04c8KLci
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_todo_mvc.module.css"; // plasmic-import: 4i89zEd2mZSwh8sdV1ACi1/projectcss
import sty from "./PlasmicToggleButton.module.css"; // plasmic-import: xkNjn04c8KLci/css

export const PlasmicToggleButton__VariantProps = new Array("state");

export const PlasmicToggleButton__ArgProps = new Array("children");

function PlasmicToggleButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootstate_selected]: hasVariant(variants, "state", "selected") }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: "All",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildrenstate_selected]: hasVariant(
            variants,
            "state",
            "selected"
          )
        })
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicToggleButton__ArgProps,
          internalVariantPropNames: PlasmicToggleButton__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicToggleButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicToggleButton";
  } else {
    func.displayName = `PlasmicToggleButton.${nodeName}`;
  }
  return func;
}

export const PlasmicToggleButton = Object.assign(
  // Top-level PlasmicToggleButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicToggleButton
    internalVariantProps: PlasmicToggleButton__VariantProps,
    internalArgProps: PlasmicToggleButton__ArgProps
  }
);

export default PlasmicToggleButton;
/* prettier-ignore-end */