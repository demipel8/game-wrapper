import base from './interface'

export default function( data = {} ) {
  let resource = Object.assign( {}, base );
  let keys = Object.keys( resource );

  keys.forEach( function( name ) {
    if( typeof data[ name ] === 'undefined' ) {
      throw new Error( `data not compatible with resource interface: ${name} is missing` );
    } else {
      resource[ name ] = data[ name ];
    }
  });

  return resource;
};

