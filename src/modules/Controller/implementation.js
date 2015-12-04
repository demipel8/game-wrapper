/**
 * Created by demi on 11/21/15.
 */
import base from './interface'

const types = [ 'image', 'audio', 'json' ]; //TODO Loader should have the types

/**
 * Adds every element of one type to the loader queue
 * @private
 * @param assets {Object} - object containing all assets
 * @param type {string} - type name
 */
function loadType( assets, type ) {

  if ( assets[ type ] ) {

    let keys = Object.keys( jsonData[ type ] );

    keys.forEach( function( element ) {
      game.loader[ type ]( element, assets[ type ][ element ]);
    });
  }
}

export default Object.assign({}, base, {

  launch( game, [ jsonData, width, height, renderer ] ) {

    //Initialize modules
    game.render.initialize( game, width, height, renderer );

    Object.keys( game ).forEach( function( module ) {
      if( module !== 'render' && game[module].initialize ) {
        game[module].initialize( game );
      }
    });

    types.forEach( loadType.bind( null, jsonData) );

    return game.loader.start().then( () => {
      game.loop.start();
      return game;
    } );
  }
})
