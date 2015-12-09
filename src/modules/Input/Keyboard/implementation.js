import base from './interface'
import keyboard from 'keypress.js'

let listener;
const keyCodes = keyboard._keycode_dictionary;

let keys = {};

function keyDown( key ) {
 keys[ key ] = true;
}

function keyUp( key ) {
 keys[ key ] = false;
}

export default Object.assign( {}, base, {

  initialize() {
    listener = new keyboard.Listener();

    for (let key in keyCodes) {
      if ( keyCodes.hasOwnProperty( key ) ) {
        keys[keyCodes[key]] = false;
        listener.register_combo({
          keys: [keyCodes[key]],
          on_keydown: keyDown.bind(null, keyCodes[key]),
          on_keyup: keyUp.bind(null, keyCodes[key])
        });
      }
    }

  },

  isDown( key ) {
    return keys[ key.toLowerCase() ];
  }

});
