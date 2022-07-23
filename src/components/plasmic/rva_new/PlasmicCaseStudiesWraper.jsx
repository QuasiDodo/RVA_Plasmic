// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sSe8AoDiAW5DkmycE76RKb
// Component: 8-mbWFXVtuiyeU
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import Button from "../../Button" // plasmic-import: AI4dzLfJKZOBy/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_rva_new.module.css" // plasmic-import: sSe8AoDiAW5DkmycE76RKb/projectcss
import * as sty from "./PlasmicCaseStudiesWraper.module.css" // plasmic-import: 8-mbWFXVtuiyeU/css
import people31046351920JpgXh7Bar7SyhKi8G from "./images/people31046351920Jpg.jpeg" // plasmic-import: Xh7Bar7SyhKI8G/picture

export const PlasmicCaseStudiesWraper__VariantProps = new Array()

export const PlasmicCaseStudiesWraper__ArgProps = new Array("children", "slot")

function PlasmicCaseStudiesWraper__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={"/story"}
      platform={"gatsby"}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__wc6BZ)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: people31046351920JpgXh7Bar7SyhKi8G,
              fullWidth: 1920,
              fullHeight: 1281,
              aspectRatio: undefined,
            }}
          />
        ),

        value: args.children,
      })}

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__m1ImN
                )}
              >
                {"Case Studies Lorem Heading "}
              </h3>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hpj61
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...."
                }
              </div>

              <Button
                className={classNames("__wab_instance", sty.button__w9Jvy)}
                color={"blackCoffee"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2EiQq
                  )}
                >
                  {"Read More"}
                </div>
              </Button>
            </React.Fragment>
          ),

          value: args.slot,
        })}
      </p.Stack>
    </p.PlasmicLink>
  )
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCaseStudiesWraper__ArgProps,
          internalVariantPropNames: PlasmicCaseStudiesWraper__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicCaseStudiesWraper__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicCaseStudiesWraper"
  } else {
    func.displayName = `PlasmicCaseStudiesWraper.${nodeName}`
  }
  return func
}

export const PlasmicCaseStudiesWraper = Object.assign(
  // Top-level PlasmicCaseStudiesWraper renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicCaseStudiesWraper
    internalVariantProps: PlasmicCaseStudiesWraper__VariantProps,
    internalArgProps: PlasmicCaseStudiesWraper__ArgProps,
  }
)

export default PlasmicCaseStudiesWraper
/* prettier-ignore-end */
