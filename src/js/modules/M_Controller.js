/**
 * Created by demi on 11/21/15.
 */
import base from '../interfaces/I_Controller'

base.launch = function( [ jsonData ], game ) {
  let keys;

  if( jsonData.images ){
    keys = Object.keys( jsonData.images );

    keys.forEach( function( image ) {
      game.loader.image( image, jsonData.images[ image ]);
    });
  }

  if( jsonData.audio ){
    keys = Object.keys( jsonData.audio );

    keys.forEach( function( image ) {
      game.loader.audio( image, jsonData.audio[ image ]);
    });
  }

  return game.loader.start().then( () => { return game } );
};

export default base

//TODO la promesa tiene que devolver el objeto juego
//TODO cargar jsons
