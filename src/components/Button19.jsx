import * as React from "react"
import { PlasmicButton19 } from "./plasmic/rva_new/PlasmicButton19"

function Button19_(props, ref) {
  const { plasmicProps } = PlasmicButton19.useBehavior(props, ref)
  return <PlasmicButton19 {...plasmicProps} />
}

const Button19 = React.forwardRef(Button19_)

export default Object.assign(Button19, {
  __plumeType: "button",
})
