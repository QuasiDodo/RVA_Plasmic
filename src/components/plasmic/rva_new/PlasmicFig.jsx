// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sSe8AoDiAW5DkmycE76RKb
// Component: _DbnGlNkMg
import * as React from "react"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_rva_new.module.css" // plasmic-import: sSe8AoDiAW5DkmycE76RKb/projectcss
import * as sty from "./PlasmicFig.module.css" // plasmic-import: _DbnGlNkMg/css

export const PlasmicFig__VariantProps = new Array()

export const PlasmicFig__ArgProps = new Array()

function PlasmicFig__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
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
        sty.root
      )}
    />
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFig__ArgProps,
          internalVariantPropNames: PlasmicFig__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicFig__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicFig"
  } else {
    func.displayName = `PlasmicFig.${nodeName}`
  }
  return func
}

export const PlasmicFig = Object.assign(
  // Top-level PlasmicFig renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFig
    internalVariantProps: PlasmicFig__VariantProps,
    internalArgProps: PlasmicFig__ArgProps,
  }
)

export default PlasmicFig
/* prettier-ignore-end */
