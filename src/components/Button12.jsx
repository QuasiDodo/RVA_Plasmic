import * as React from "react"
import { PlasmicButton12 } from "./plasmic/rva_new/PlasmicButton12"

function Button12_(props, ref) {
  const { plasmicProps } = PlasmicButton12.useBehavior(props, ref)
  return <PlasmicButton12 {...plasmicProps} />
}

const Button12 = React.forwardRef(Button12_)

export default Object.assign(Button12, {
  __plumeType: "button",
})
