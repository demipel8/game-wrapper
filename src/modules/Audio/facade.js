/**
 * Audio module. Manages audio features in the games
 * @module GW.Audio
 * @author demipel8 [demipel8@gmail.com]
 */

import audio from './implementation';

export default {
  /**
   * Used to configure any initial state required by the implementation
   * @param {Object} game - game object
   * @example
   * game.audio.initialize( game );
   */
  initialize: audio.initialize,
  /**
   * Returns the sounds container entirely
   * @returns {Object} sounds - The sounds container
   * @example
   * let allSounds = game.audio.getSounds();
   */
  getSounds: audio.getSounds,
  /**
   * Plays a specified audio
   * @param  {string} name - audio id string
   * @returns {Object} sound - The sounds that is playing
   * @example
   * game.audio.play('audio');
   */
  play: audio.play,
  /**
   * Pauses a specified audio
   * @param {string} name - audio id string
   * @returns {Object} sound - The sounds that is being Paused
   * @example
   * game.audio.pause('audio');
   */
  pause: audio.pause,
  /**
   * Stops a specified audio
   * @param {string} name - audio id string
   * @returns {Object} sound - The sound that has been stopped
   * @example
   * game.audio.stop('audio');
   */
  stop: audio.stop,
  /**
   * Returns a specified audio
   * @param {string} name - audio id string
   * @returns {Object} sound - The sound
   * @example
   * game.audio.stop('audio');
   */
  get: audio.get
}
