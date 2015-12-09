/**
 * World module. Contains all modules present in the game
 * @module GW.World
 * @author demipel8 [demipel8@gmail.com]
 */
import world from './implementation';

export default {

  /**
   * Used to configure any initial state required by the implementation.
   * @param game - game object
   * @example
   * game.world.initialize( game );
   */
  initialize: world.initialize,
  /**
   * @property {array} objects - All game objects
   */
  objects: world.objects,

  /**
   * Add an element to the world
   * @param {Object} obj - object to add
   */
  add: world.add,

  /**
   * Remove an element from the world
   * @param {Object} obj - object to remove
   */
  remove: world.remove
}
