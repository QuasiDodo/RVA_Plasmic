import * as React from "react"
import { PlasmicButton13 } from "./plasmic/rva_new/PlasmicButton13"

function Button13_(props, ref) {
  const { plasmicProps } = PlasmicButton13.useBehavior(props, ref)
  return <PlasmicButton13 {...plasmicProps} />
}

const Button13 = React.forwardRef(Button13_)

export default Object.assign(Button13, {
  __plumeType: "button",
})
