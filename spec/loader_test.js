/**
 * Created by demi on 11/8/15.
 */

import Loader from '../src/js/modules/M_Loader';

describe ( 'testing karma in GW', function() {
  it ( 'should work', function() {
    Loader.initialize();
    expect( Loader.loader ).not.to.equal( undefined );
  } );

} );
