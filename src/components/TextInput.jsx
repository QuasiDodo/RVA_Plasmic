import * as React from "react"
import { PlasmicTextInput } from "./plasmic/rva_new/PlasmicTextInput"

function TextInput_(props, ref) {
  const { plasmicProps } = PlasmicTextInput.useBehavior(props, ref)
  return <PlasmicTextInput {...plasmicProps} />
}

const TextInput = React.forwardRef(TextInput_)

export default Object.assign(TextInput, {
  __plumeType: "text-input",
})
