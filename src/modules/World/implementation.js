import base from './interface';

let objects = [];

export default Object.assign({}, base, {

  objects,

  initialize( game ) {
    game.loop.addUpdate( function() {
      objects.forEach( ( element ) => { if( element.update ) { element.update() } });
    });
  },

  add( element ) {
    objects.push( element );
  },

  remove( element ) {
    let index = objects.indexOf( element );

    if( !~index ) {
      throw new Error( `Element ${element} is not on the world` );
    }

    objects.splice(index, 1);
  }
});
