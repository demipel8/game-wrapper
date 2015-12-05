/**
 * Render module. Renders the view onto the screen
 * @module GW.Render
 * @author demipel8 [demipel8@gmail.com]
 */
import render from './implementation'

export default {

  /**
   * Used to configure any initial state required by the implementation.
   * @param game - game object
   * @example
   * game.loader.initialize( game );
   */
  initialize: render.initialize,

  /**
   * Generate a new sprite object
   * @param image {string} - image url
   * @param {number} x - x position
   * @param {number} y - y position
   * @returns {Object} the new sprite
   * @example
   * let sprite = game.render.addSprite( loadedImage.url , x, y );
   */
  addSprite: render.addSprite,

  /**
   * Removes a sprite from the stage
   * @param {Object} sprite - sprite to remove
   * @example
   * game.render.removeSprite( gameSprite );
   */
  removeSprite: render.removeSprite,

  /**
   * Generate a new text object
   * @param text {string} - text string
   * @param {number} x - x position
   * @param {number} y - y position
   * @returns {Object} the new text
   * @example
   * let text = game.render.addText( 'A string into the game' , x, y );
   */
  addText: render.addText,

  /**
   * Removes a text from the stage
   * @param {Object} text - text to remove
   * @example
   * game.render.removeText( textFromTheGame );
   */
  removeText: render.removeText,

  /**
   * Gets the screen width
   * @returns {number} game width
   */
  getWidth: render.getWidth,

  /**
   * Gets the screen height
   * @returns {number} game height
   */
  getHeight: render.getHeight
}
