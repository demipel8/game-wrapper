/**
 * Created by demi on 11/21/15.
 */
import base from './interface'

/**
 * Loads and starts game loop
 * @param jsonData {object} - assets the game must load. Can have 3 subobjects: audio, image, json
 * @param game {object} - game object, injected by GW
 * @param width [number] - Game width
 * @param height [number] - Game height
 * @param renderer [string]
 * @returns {*} {Promise<object>} - if all assets are loaded, it returns an instance of the game
 * @example
 * GW({}, {
 *    image: { 'icon': './assets/icon.png' },
 *    audio: { 'audio': './assets/audio.mp3' },
 *    json: { 'icon': './assets/data.json' }
 * } ).then( function( game ){} );
 */
base.launch = function( game, [ jsonData, width, height, renderer ] ) {
  const types = [ 'image', 'audio', 'json' ];

  //Initialize modules
  game.render.initialize( game, width, height, renderer);

  Object.keys( game ).forEach( function( module ) {
    if( module !== 'render' && game[module].initialize ) {
      game[module].initialize( game );
    }
  });

  /**
   * Adds every element of one type to the loader queue
   * @param type {string} - type name
     */
  function loadType( type ) {
    if( jsonData[ type ] ){
      let keys = Object.keys( jsonData[ type ] );

      keys.forEach( function( element ) {
        game.loader[ type ]( element, jsonData[ type ][ element ]);
      });
    }
  }

  types.forEach( loadType );

  return game.loader.start().then( () => {
    game.loop.start();
    return game;
  } );
};

export default base
