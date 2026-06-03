import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import targetScript from "./scripts/target.inline"

const TargetHighlight: QuartzComponent = () => {
  return null
}

TargetHighlight.afterDOMLoaded = targetScript

export default (() => TargetHighlight) satisfies QuartzComponentConstructor