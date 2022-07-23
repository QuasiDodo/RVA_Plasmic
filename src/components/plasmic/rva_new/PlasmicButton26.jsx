// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sSe8AoDiAW5DkmycE76RKb
// Component: UdLnWbShe4VN
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import * as pp from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_rva_new.module.css" // plasmic-import: sSe8AoDiAW5DkmycE76RKb/projectcss
import * as sty from "./PlasmicButton26.module.css" // plasmic-import: UdLnWbShe4VN/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg" // plasmic-import: KZLSx5GjmP3wFG/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5" // plasmic-import: wcNkZzZBoe4/icon

export const PlasmicButton26__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
)

export const PlasmicButton26__ArgProps = new Array(
  "children",
  "startIcon",
  "endIcon",
  "link"
)

function PlasmicButton26__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false,
    })

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
  }

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_blue]: hasVariant(variants, "color", "blue"),
          [sty.rootcolor_clear]: hasVariant(variants, "color", "clear"),
          [sty.rootcolor_green]: hasVariant(variants, "color", "green"),
          [sty.rootcolor_link]: hasVariant(variants, "color", "link"),
          [sty.rootcolor_red]: hasVariant(variants, "color", "red"),
          [sty.rootcolor_sand]: hasVariant(variants, "color", "sand"),
          [sty.rootcolor_softBlue]: hasVariant(variants, "color", "softBlue"),
          [sty.rootcolor_softGreen]: hasVariant(variants, "color", "softGreen"),
          [sty.rootcolor_softRed]: hasVariant(variants, "color", "softRed"),
          [sty.rootcolor_softSand]: hasVariant(variants, "color", "softSand"),
          [sty.rootcolor_softYellow]: hasVariant(
            variants,
            "color",
            "softYellow"
          ),

          [sty.rootcolor_white]: hasVariant(variants, "color", "white"),
          [sty.rootcolor_yellow]: hasVariant(variants, "color", "yellow"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.rootshape_round]: hasVariant(variants, "shape", "round"),
          [sty.rootshape_round_size_compact]:
            hasVariant(variants, "shape", "round") &&
            hasVariant(variants, "size", "compact"),
          [sty.rootshape_rounded]: hasVariant(variants, "shape", "rounded"),
          [sty.rootshape_sharp]: hasVariant(variants, "shape", "sharp"),
          [sty.rootshowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),

          [sty.rootshowEndIcon_shape_rounded]:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.rootshowEndIcon_size_compact]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),

          [sty.rootshowStartIcon_shape_rounded]:
            hasVariant(variants, "shape", "rounded") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.rootshowStartIcon_showEndIcon_size_compact]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.rootshowStartIcon_size_compact]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.rootsize_compact]: hasVariant(variants, "size", "compact"),
          [sty.rootsize_compact_shape_rounded]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.rootsize_minimal]: hasVariant(variants, "size", "minimal"),
          [sty.rootsize_minimal_color_link]:
            hasVariant(variants, "color", "link") &&
            hasVariant(variants, "size", "minimal"),
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : false
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainercolor_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),

            [sty.startIconContainershowStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),

            [sty.startIconContainershowStartIcon_shape_rounded]:
              hasVariant(variants, "shape", "rounded") &&
              hasVariant(variants, "showStartIcon", "showStartIcon"),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg___3TIsV)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),

              [sty.slotTargetStartIconcolor_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),

              [sty.slotTargetStartIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetStartIconcolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),

              [sty.slotTargetStartIconcolor_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),

              [sty.slotTargetStartIconcolor_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),

              [sty.slotTargetStartIconcolor_softSand]: hasVariant(
                variants,
                "color",
                "softSand"
              ),

              [sty.slotTargetStartIconcolor_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),

              [sty.slotTargetStartIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetStartIconcolor_yellow]: hasVariant(
                variants,
                "color",
                "yellow"
              ),

              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              ),
            }),
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.contentContainerisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.contentContainershape_rounded]: hasVariant(
            variants,
            "shape",
            "rounded"
          ),

          [sty.contentContainershowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.slotTargetChildrencolor_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),

            [sty.slotTargetChildrencolor_clear]: hasVariant(
              variants,
              "color",
              "clear"
            ),

            [sty.slotTargetChildrencolor_green]: hasVariant(
              variants,
              "color",
              "green"
            ),

            [sty.slotTargetChildrencolor_link]: hasVariant(
              variants,
              "color",
              "link"
            ),

            [sty.slotTargetChildrencolor_red]: hasVariant(
              variants,
              "color",
              "red"
            ),

            [sty.slotTargetChildrencolor_sand]: hasVariant(
              variants,
              "color",
              "sand"
            ),

            [sty.slotTargetChildrencolor_softBlue]: hasVariant(
              variants,
              "color",
              "softBlue"
            ),

            [sty.slotTargetChildrencolor_softGreen]: hasVariant(
              variants,
              "color",
              "softGreen"
            ),

            [sty.slotTargetChildrencolor_softRed]: hasVariant(
              variants,
              "color",
              "softRed"
            ),

            [sty.slotTargetChildrencolor_softSand]: hasVariant(
              variants,
              "color",
              "softSand"
            ),

            [sty.slotTargetChildrencolor_softYellow]: hasVariant(
              variants,
              "color",
              "softYellow"
            ),

            [sty.slotTargetChildrencolor_white]: hasVariant(
              variants,
              "color",
              "white"
            ),

            [sty.slotTargetChildrencolor_yellow]: hasVariant(
              variants,
              "color",
              "yellow"
            ),

            [sty.slotTargetChildrenisDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.slotTargetChildrenshape_rounded]: hasVariant(
              variants,
              "shape",
              "rounded"
            ),

            [sty.slotTargetChildrenshowEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),

            [sty.slotTargetChildrenshowStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),

            [sty.slotTargetChildrensize_minimal]: hasVariant(
              variants,
              "size",
              "minimal"
            ),

            [sty.slotTargetChildrensize_minimal_color_link]:
              hasVariant(variants, "color", "link") &&
              hasVariant(variants, "size", "minimal"),
          }),
        })}
      </div>

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainercolor_white]: hasVariant(
              variants,
              "color",
              "white"
            ),

            [sty.endIconContainercolor_yellow]: hasVariant(
              variants,
              "color",
              "yellow"
            ),

            [sty.endIconContainershowEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg__ptkVg)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),

              [sty.slotTargetEndIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetEndIconcolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),

              [sty.slotTargetEndIconcolor_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),

              [sty.slotTargetEndIconcolor_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),

              [sty.slotTargetEndIconcolor_softSand]: hasVariant(
                variants,
                "color",
                "softSand"
              ),

              [sty.slotTargetEndIconcolor_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),

              [sty.slotTargetEndIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetEndIconcolor_yellow]: hasVariant(
                variants,
                "color",
                "yellow"
              ),

              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),
            }),
          })}
        </div>
      ) : null}
    </p.Stack>
  )
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton26,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon",
      },

      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root",
    },

    ref
  )

  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = p.PlasmicLink
    b.plasmicProps.overrides.root.props.component = Link
    b.plasmicProps.overrides.root.props.platform = "gatsby"
  }
  return b
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButton26__ArgProps,
          internalVariantPropNames: PlasmicButton26__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicButton26__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicButton26"
  } else {
    func.displayName = `PlasmicButton26.${nodeName}`
  }
  return func
}

export const PlasmicButton26 = Object.assign(
  // Top-level PlasmicButton26 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicButton26
    internalVariantProps: PlasmicButton26__VariantProps,
    internalArgProps: PlasmicButton26__ArgProps,
    useBehavior,
  }
)

export default PlasmicButton26
/* prettier-ignore-end */
