import * as React from "react"
import { PlasmicButton27 } from "./plasmic/rva_new/PlasmicButton27"

function Button27_(props, ref) {
  const { plasmicProps } = PlasmicButton27.useBehavior(props, ref)
  return <PlasmicButton27 {...plasmicProps} />
}

const Button27 = React.forwardRef(Button27_)

export default Object.assign(Button27, {
  __plumeType: "button",
})
