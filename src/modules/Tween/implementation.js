
import base from './interface'
import Tween from 'tween.js'

base.initialize = function( game ) {
  game.loop.addUpdate( function() {
    Tween.update();
  });
};

base.get = function( obj ) {
  return new Tween.Tween(obj);
};

base.easing = Tween.Easing;

export default base;
