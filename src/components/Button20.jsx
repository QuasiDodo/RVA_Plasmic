import * as React from "react"
import { PlasmicButton20 } from "./plasmic/rva_new/PlasmicButton20"

function Button20_(props, ref) {
  const { plasmicProps } = PlasmicButton20.useBehavior(props, ref)
  return <PlasmicButton20 {...plasmicProps} />
}

const Button20 = React.forwardRef(Button20_)

export default Object.assign(Button20, {
  __plumeType: "button",
})
