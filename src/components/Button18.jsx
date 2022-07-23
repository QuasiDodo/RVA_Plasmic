import * as React from "react"
import { PlasmicButton18 } from "./plasmic/rva_new/PlasmicButton18"

function Button18_(props, ref) {
  const { plasmicProps } = PlasmicButton18.useBehavior(props, ref)
  return <PlasmicButton18 {...plasmicProps} />
}

const Button18 = React.forwardRef(Button18_)

export default Object.assign(Button18, {
  __plumeType: "button",
})
