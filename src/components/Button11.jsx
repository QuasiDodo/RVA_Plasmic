import * as React from "react"
import { PlasmicButton11 } from "./plasmic/rva_new/PlasmicButton11"

function Button11_(props, ref) {
  const { plasmicProps } = PlasmicButton11.useBehavior(props, ref)
  return <PlasmicButton11 {...plasmicProps} />
}

const Button11 = React.forwardRef(Button11_)

export default Object.assign(Button11, {
  __plumeType: "button",
})
