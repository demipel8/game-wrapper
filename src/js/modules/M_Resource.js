import base from '../interfaces/I_Resource'

export default function( data = {} ) {
  let keys = Object.keys( base );

  keys.forEach( function( name ) {
    if( typeof data[ name ] === 'undefined' ) {
      throw new Error( `data not compatible with resource interface: ${name} is missing` );
    } else {
      base[ name ] = data[ name ];
    }
  });

  return base;
};

