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
   * @param game {object} - game object, injected by GW
   * @param jsonData {object} - assets the game must load. Can have 3 subobjects: audio, image, json
   * @param width [number] - game width
   * @param height [number] - game height
   * @param renderer [string] - type of render
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
