import * as React from "react"
import { PlasmicButton21 } from "./plasmic/rva_new/PlasmicButton21"

function Button21_(props, ref) {
  const { plasmicProps } = PlasmicButton21.useBehavior(props, ref)
  return <PlasmicButton21 {...plasmicProps} />
}

const Button21 = React.forwardRef(Button21_)

export default Object.assign(Button21, {
  __plumeType: "button",
})
