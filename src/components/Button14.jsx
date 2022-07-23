import * as React from "react"
import { PlasmicButton14 } from "./plasmic/rva_new/PlasmicButton14"

function Button14_(props, ref) {
  const { plasmicProps } = PlasmicButton14.useBehavior(props, ref)
  return <PlasmicButton14 {...plasmicProps} />
}

const Button14 = React.forwardRef(Button14_)

export default Object.assign(Button14, {
  __plumeType: "button",
})
