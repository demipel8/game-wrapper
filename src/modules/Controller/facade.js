/**
 * Controller module. Controls the flow of the game. In this case
 * Initializes all modules, loads the assets and return control
 * to the developer
 * @module GW.Controller
 * @author demipel8 [demipel8@gmail.com]
 */
import controller from './implementation'

export default {
  /**
   * Loads and starts game loop
   * @param {object} game - game object, injected by GW
   * @param {object} jsonData - assets the game must load. Can have 3 subobjects: audio, image, json
   * @param {number} [width=800] - game width
   * @param {number} [height=600] - game height
   * @param {string} [renderer] - type of render
   * @returns {*} {Promise<object>} - if all assets are loaded, it returns an instance of the game
   * @example
   * GW({}, {
 *    image: { 'icon': './assets/icon.png' },
 *    audio: { 'audio': './assets/audio.mp3' },
 *    json: { 'icon': './assets/data.json' }
 * } ).then( function( game ){} );
   */
  launch: controller.launch
}
