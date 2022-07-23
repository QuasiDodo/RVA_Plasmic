import * as React from "react"
import { PlasmicButton17 } from "./plasmic/rva_new/PlasmicButton17"

function Button17_(props, ref) {
  const { plasmicProps } = PlasmicButton17.useBehavior(props, ref)
  return <PlasmicButton17 {...plasmicProps} />
}

const Button17 = React.forwardRef(Button17_)

export default Object.assign(Button17, {
  __plumeType: "button",
})
