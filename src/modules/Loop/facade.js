/**
 * Loop module. Main loop of the game
 * @module GW.Loop
 * @author demipel8 [demipel8@gmail.com]
 */
import loop from './implementation';

export default {

  /**
   * Used to configure any initial state required by the implementation.
   * @param game - game object
   * @example
   * game.loop.initialize( game );
   */
  initialize: loop.initialize,

  /**
   * Get the loop running
   * @example
   * game.loop.start();
   */
  start: loop.start,

  /**
   * Stops the loop
   * @example
   * game.loop.stop();
   */
  stop: loop.stop,

  /**
   * Adds a function callback to the process stage
   * @param callback {function} - callback function
   * @example
   * game.loop.addProcess( () => {} );
   */
  addProcess: loop.addProcess,

  /**
   * Removes a function callback from the process stage
   * @param callback {function} - callback function
   * @returns {function} - deleted function
   * @example
   * game.loop.removeProcess( () => {} );
   */
  removeProcess: loop.removeProcess,

  /**
   * Adds a function callback to the update stage
   * @param {function} callback - callback function
   * @example
   * game.loop.addUpdate( () => {} );
   */
  addUpdate: loop.addUpdate,

  /**
   * Removes a function callback from the update stage
   * @param {function} callback - callback function
   * @returns {function} - deleted function
   * @example
   * game.loop.removeUpdate( () => {} );
   */
  removeUpdate: loop.removeUpdate,

  /**
   * Adds a function callback to the render stage
   * @param {function} callback - callback function
   * @example
   * game.loop.addRender( () => {} );
   */
  addRender: loop.addRender,

  /**
   * Removes a function callback from the render stage
   * @param {function} callback - callback function
   * @returns {function} - deleted function
   * @example
   * game.loop.removeRender( () => {} );
   */

  removeRender: loop.removeRender,

  /**
   * Adds a function callback to the post render stage
   * @param {function} callback - callback function
   * @example
   * game.loop.addPostRender( () => {} );
   */
  addPostRender: loop.addPostRender,

  /**
   * Removes a function callback from the post render stage
   * @param {function} callback - callback function
   * @returns {function} - deleted function
   * @example
   * game.loop.removePostRender( () => {} );
   */
  removePostRender: loop.removePostRender,

  /**
   * Get the number of FPS the game is running at
   * @example
   * let actualFPS = game.loop.getFPS();
   */
  getFPS: loop.getFPS,

  /**
   * Set Desired FPS
   * @param {number} FPS - desired value
   * @example
   * game.loop.setFPS( 30 );
   */
  setFPS: loop.setFPS

};
