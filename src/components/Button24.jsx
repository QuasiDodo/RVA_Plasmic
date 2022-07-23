import * as React from "react"
import { PlasmicButton24 } from "./plasmic/rva_new/PlasmicButton24"

function Button24_(props, ref) {
  const { plasmicProps } = PlasmicButton24.useBehavior(props, ref)
  return <PlasmicButton24 {...plasmicProps} />
}

const Button24 = React.forwardRef(Button24_)

export default Object.assign(Button24, {
  __plumeType: "button",
})
