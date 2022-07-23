import * as React from "react"
import { PlasmicButton28 } from "./plasmic/rva_new/PlasmicButton28"

function Button28_(props, ref) {
  const { plasmicProps } = PlasmicButton28.useBehavior(props, ref)
  return <PlasmicButton28 {...plasmicProps} />
}

const Button28 = React.forwardRef(Button28_)

export default Object.assign(Button28, {
  __plumeType: "button",
})
