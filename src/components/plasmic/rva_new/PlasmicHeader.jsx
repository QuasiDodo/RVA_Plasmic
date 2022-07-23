// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sSe8AoDiAW5DkmycE76RKb
// Component: rlLZVswJyeOUp
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_rva_new.module.css" // plasmic-import: sSe8AoDiAW5DkmycE76RKb/projectcss
import * as sty from "./PlasmicHeader.module.css" // plasmic-import: rlLZVswJyeOUp/css
import rvaLogopngTxxs8MLwc from "./images/rvaLogopng.png" // plasmic-import: Txxs8mLWC/picture

export const PlasmicHeader__VariantProps = new Array()

export const PlasmicHeader__ArgProps = new Array()

function PlasmicHeader__RenderFunc(props) {
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
    >
      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        className={classNames(projectcss.all, sty.container)}
      >
        <div
          data-plasmic-name={"row"}
          data-plasmic-override={overrides.row}
          className={classNames(projectcss.all, sty.row)}
        >
          <div className={classNames(projectcss.all, sty.column__p6Kdu)}>
            <p.PlasmicLink
              data-plasmic-name={"headerLeft"}
              data-plasmic-override={overrides.headerLeft}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.headerLeft
              )}
              component={Link}
              href={"/"}
              platform={"gatsby"}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"67px"}
                displayMaxHeight={"74px"}
                displayMaxWidth={"199px"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: rvaLogopngTxxs8MLwc,
                  fullWidth: 983,
                  fullHeight: 197,
                  aspectRatio: undefined,
                }}
              />
            </p.PlasmicLink>
          </div>

          <div className={classNames(projectcss.all, sty.column__iOdoy)}>
            <div
              data-plasmic-name={"headerRight"}
              data-plasmic-override={overrides.headerRight}
              className={classNames(projectcss.all, sty.headerRight)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__lVxpa
                )}
                component={Link}
                href={"/Services"}
                platform={"gatsby"}
              >
                {"Services"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___0A2Of
                )}
                component={Link}
                href={"/stories"}
                platform={"gatsby"}
              >
                {"Stories"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__eaVg4
                )}
                component={Link}
                href={"/about"}
                platform={"gatsby"}
              >
                {"About us"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__rPt9H
                )}
                component={Link}
                href={"/contact"}
                platform={"gatsby"}
              >
                {"Contact us"}
              </p.PlasmicLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "container", "row", "headerLeft", "img", "headerRight"],
  container: ["container", "row", "headerLeft", "img", "headerRight"],
  row: ["row", "headerLeft", "img", "headerRight"],
  headerLeft: ["headerLeft", "img"],
  img: ["img"],
  headerRight: ["headerRight"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader"
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`
  }
  return func
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    row: makeNodeComponent("row"),
    headerLeft: makeNodeComponent("headerLeft"),
    img: makeNodeComponent("img"),
    headerRight: makeNodeComponent("headerRight"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
)

export default PlasmicHeader
/* prettier-ignore-end */
