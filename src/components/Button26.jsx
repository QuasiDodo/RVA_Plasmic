import * as React from "react"
import { PlasmicButton26 } from "./plasmic/rva_new/PlasmicButton26"

function Button26_(props, ref) {
  const { plasmicProps } = PlasmicButton26.useBehavior(props, ref)
  return <PlasmicButton26 {...plasmicProps} />
}

const Button26 = React.forwardRef(Button26_)

export default Object.assign(Button26, {
  __plumeType: "button",
})
