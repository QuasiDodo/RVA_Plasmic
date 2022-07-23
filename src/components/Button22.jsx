import * as React from "react"
import { PlasmicButton22 } from "./plasmic/rva_new/PlasmicButton22"

function Button22_(props, ref) {
  const { plasmicProps } = PlasmicButton22.useBehavior(props, ref)
  return <PlasmicButton22 {...plasmicProps} />
}

const Button22 = React.forwardRef(Button22_)

export default Object.assign(Button22, {
  __plumeType: "button",
})
