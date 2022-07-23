import * as React from "react"
import { PlasmicButton25 } from "./plasmic/rva_new/PlasmicButton25"

function Button25_(props, ref) {
  const { plasmicProps } = PlasmicButton25.useBehavior(props, ref)
  return <PlasmicButton25 {...plasmicProps} />
}

const Button25 = React.forwardRef(Button25_)

export default Object.assign(Button25, {
  __plumeType: "button",
})
