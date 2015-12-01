/**
 * Created by demi on 11/30/15.
 */

//maybe move tween to factory objects
import audio from './implementation'

export default {
  initialize: audio.initialize,
  sounds: audio.sounds,
  play: audio.play,
  pause: audio.pause,
  stop: audio.stop,
  get: audio.get
}
