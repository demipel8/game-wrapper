import keyboard from './Keyboard/implementation'
import pointer from './Pointer/implementation'

function initialize( game ) {
  keyboard.initialize( game );
  pointer.initialize( game );
}
export default {
  initialize,
  keyboard,
  pointer
}
