import * as React from "react"
import { PlasmicButton15 } from "./plasmic/rva_new/PlasmicButton15"

function Button15_(props, ref) {
  const { plasmicProps } = PlasmicButton15.useBehavior(props, ref)
  return <PlasmicButton15 {...plasmicProps} />
}

const Button15 = React.forwardRef(Button15_)

export default Object.assign(Button15, {
  __plumeType: "button",
})
