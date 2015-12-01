/**
 * Created by demi on 11/30/15.
 */

//maybe move tween to factory objects
import tween from './implementation'

export default {
  initialize: tween.initialize,
  get: tween.get,
  easing: tween.easing
}
