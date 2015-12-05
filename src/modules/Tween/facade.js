/**
 * Tween module. Tween for game objects
 * @module GW.Tween
 * @author demipel8 [demipel8@gmail.com]
 */
import tween from './implementation'

export default {

  /**
   * Used to configure any initial state required by the implementation.
   * @param game - game object
   * @example
   * game.tween.initialize( game );
   */
  initialize: tween.initialize,

  /**
   * Tween Factory.
   * @param {Object} obj - object to modify by the tween
   * @example
   * let obj = { x : 100, y: 0 }
   * let tweenObject = game.tween.get( obj );
   */
  get: tween.get,

  /**
   * Collection of tween function
   * @typeof {Object}
   */
  easing: tween.easing
}
