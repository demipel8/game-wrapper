/**
 * Created by demi on 11/7/15.
 */

import GE from '../src/js/app';

describe ( 'testing karma in GW', function() {
  it ( 'should work', function() {
    expect( GE().gameObjects.length ).to.equal( 0 );
  } );

  it ( 'should add userConfig to the config object', function() {
    expect( GE( { test: 'ok' }).config.test ).to.equal( 'ok' );
  } );
} );
