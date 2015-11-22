/**
 * Created by demi on 11/21/15.
 */

function myGame( game ) {
  console.log( 'llego' );
  console.log( game );
}

GW({}, { images: { 'icon': './assets/icon.png' } } ).then( myGame );
