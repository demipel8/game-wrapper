/**
 * Created by demi on 11/29/15.
 */

import base from './interface'
import keyboard from 'keypress.js'

let listener;
const keyCodes = keyboard._keycode_dictionary;

let keys = {};

base.initialize = function( game ) {
  listener = new keyboard.Listener();

   for( let key in keyCodes ) {
     keys[ keyCodes[ key ] ] = false;
     listener.register_combo({
       keys: [keyCodes[ key ]],
       on_keydown: keyDown.bind( null, keyCodes[ key ] ),
       on_keyup: keyUp.bind( null, keyCodes[ key ] )
     } );
   }

   function keyDown( key ) {
     keys[ key ] = true;
   }

   function keyUp( key ) {
     keys[ key ] = false;
   }

};

base.isDown = function( key ) {
  return keys[ key.toLowerCase() ];
};

export default base;
