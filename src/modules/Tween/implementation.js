
import base from './interface'
import Tween from 'tween.js'

base.easing = Tween.Easing;

export default Object.assign( {}, base, {

  initialize( game ) {
    game.loop.addUpdate( function() {
      Tween.update();
    });
  },

  get( obj ) {
    return new Tween.Tween(obj);
  },

  easing: Tween.Easing

});
