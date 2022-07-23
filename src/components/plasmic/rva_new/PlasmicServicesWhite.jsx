// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sSe8AoDiAW5DkmycE76RKb
// Component: q3dvYXhBAjM3ih
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_rva_new.module.css" // plasmic-import: sSe8AoDiAW5DkmycE76RKb/projectcss
import * as sty from "./PlasmicServicesWhite.module.css" // plasmic-import: q3dvYXhBAjM3ih/css
import Icon8Icon from "./icons/PlasmicIcon__Icon8" // plasmic-import: OeyGjHIpWB6Zm3/icon

export const PlasmicServicesWhite__VariantProps = new Array()

export const PlasmicServicesWhite__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
)

function PlasmicServicesWhite__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__xQvR)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <Icon8Icon
              className={classNames(projectcss.all, sty.svg__zxaWz)}
              role={"img"}
            />
          ),

          value: args.children,
        })}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rtYsx)}
      >
        <h3
          data-plasmic-name={"h3"}
          data-plasmic-override={overrides.h3}
          className={classNames(projectcss.all, projectcss.h3, sty.h3)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Services main",
            value: args.slot,
          })}
        </h3>

        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .",
          value: args.slot2,
        })}
      </p.Stack>
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root", "h3"],
  h3: ["h3"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicServicesWhite__ArgProps,
          internalVariantPropNames: PlasmicServicesWhite__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicServicesWhite__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicServicesWhite"
  } else {
    func.displayName = `PlasmicServicesWhite.${nodeName}`
  }
  return func
}

export const PlasmicServicesWhite = Object.assign(
  // Top-level PlasmicServicesWhite renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    // Metadata about props expected for PlasmicServicesWhite
    internalVariantProps: PlasmicServicesWhite__VariantProps,
    internalArgProps: PlasmicServicesWhite__ArgProps,
  }
)

export default PlasmicServicesWhite
/* prettier-ignore-end */