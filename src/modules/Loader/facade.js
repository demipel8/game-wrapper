/**
 * Loader modules. Loads assets onto the clients browser
 * @module GW.Loader
 * @author demipel8 [demipel8@gmail.com]
 */
import loader from './implementation';

export default {

  /**
   * Used to configure any initial state required by the implementation.
   * @param game - game object
   * @example
   * game.loader.initialize( game );
   */
  initialize : loader.initialize,
  /**
   * Starts loading all the elements queued.
   * @return {Promise} - Resolved when loading has finished
   * @example
   * game.loader.start();
   */
  start: loader.start,
  /**
   * Adds an image to the queue.
   * @param {string} name - name of the asset
   * @param {string} url - path to the asset
   * @example
   * game.loader.image( 'image', 'http://path.to.the.asset' );
   */
  image: loader.image,
  /**
   * Adds an audio to the queue.
   * @param {string} name - name of the asset
   * @param {string} url - path to the asset
   * @example
   * game.loader.audio( 'audio', 'http://path.to.the.asset' );
   */
  audio: loader.audio,
  /**
   * Adds a json file to the queue.
   * @param {string} name - name of the file
   * @param {string} url - path to the file
   * @example
   * game.loader.json( 'jsonName', 'http://path.to.the.asset' );
   */
  json: loader.json,
  /**
   * Return a specific resource.
   * @param {string} name - name of the resource
   * @returns {Resource}
   * @example
   * let resource = game.loader.getResource( 'audio' );
   */
  getResource: loader.getResource
}
