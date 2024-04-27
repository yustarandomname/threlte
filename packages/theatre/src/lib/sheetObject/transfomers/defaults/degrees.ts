import { DEG2RAD, RAD2DEG } from 'three/src/math/MathUtils.js'
import { createTransformer } from '../createTransformer'
import { types } from '../../../theatre'

export const degrees = createTransformer({
  transform(target) {
    return types.number(target * RAD2DEG)
  },
  apply(target, path, value) {
    target[path] = value * DEG2RAD
  }
})
