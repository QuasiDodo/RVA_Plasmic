import * as React from "react"
import { PlasmicButton23 } from "./plasmic/rva_new/PlasmicButton23"

function Button23_(props, ref) {
  const { plasmicProps } = PlasmicButton23.useBehavior(props, ref)
  return <PlasmicButton23 {...plasmicProps} />
}

const Button23 = React.forwardRef(Button23_)

export default Object.assign(Button23, {
  __plumeType: "button",
})
