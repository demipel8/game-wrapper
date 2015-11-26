/**
 * Created by demi on 11/21/15.
 */
import base from './interface'

base.initialize = function( game ) {
  game.loop.addUpdate( function() {
    base.objects.forEach( ( element ) => { if( element.update ) { element.update() } });
  });
};

base.add = function( element ) {
  base.objects.push( element );
};

base.remove = function ( element ) {
  var index = base.objects.indexOf( element );

  if( !~index ) {
    throw new Error( `Element ${element} is not on the world` );
  }

  base.objects.splice(index, 1);
};

export default base
