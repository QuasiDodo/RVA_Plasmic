import * as React from "react"
import { PlasmicButton16 } from "./plasmic/rva_new/PlasmicButton16"

function Button16_(props, ref) {
  const { plasmicProps } = PlasmicButton16.useBehavior(props, ref)
  return <PlasmicButton16 {...plasmicProps} />
}

const Button16 = React.forwardRef(Button16_)

export default Object.assign(Button16, {
  __plumeType: "button",
})
