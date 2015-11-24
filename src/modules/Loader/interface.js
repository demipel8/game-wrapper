/**
 * Loader modules. Loads assets onto the clients browser
 * @module GW.Loader
 * @author demipel8 [demipel8@gmail.com]
 */

export default {
  /**
   * Used to configure any initial state required by the implementation
   * @param game - game object
   */
  initialize : function( game ){},
  /**
   * Starts loading all the elements queued
   * @return {Promise} - Resolved when loading has finished
   */
  start: function(){return new Promise()},
  /**
   * Adds an image to the queue
   * @param name {string} - name of the asset
   * @param url {string} - path to the asset
   */
  image: function( name, url ){},
  /**
   * Adds an audio to the queue
   * @param name {string} - name of the asset
   * @param url {string} - path to the asset
   */
  audio: function( name, url ){},
  /**
   * Adds a json file to the queue
   * @param name {string} - name of the file
   * @param url {string} - path to the file
   */
  json: function( name, url ){},
  /**
   *
   * @param name {string} - name of the resource
   * @return {Resource}
   */
  getResource: function( name ){}
}
