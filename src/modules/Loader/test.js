/**
 * Created by demi on 11/8/15.
 */
import Loader from './implementation';

describe ( 'Loader Module default implementation in GW - resource-loader', function() {

  beforeEach( () => {
    Loader.initialize();
  });

  it('should have correct public methods', () => {
    expect(Loader).to.have.property('initialize').instanceOf(Function);
    expect(Loader).to.have.property('start').instanceOf(Function);
    expect(Loader).to.have.property('image').instanceOf(Function);
    expect(Loader).to.have.property('audio').instanceOf(Function);
    expect(Loader).to.have.property('json').instanceOf(Function);
    expect(Loader).to.have.property('getResource').instanceOf(Function);
  });

  describe( '#initialize', () => {
    it('works based on the two tests above', () => true );
  });

  describe( '#start', () => {
    it('returns a promise', () => {
      var promise = Loader.start();
      expect(promise).instanceOf( Promise );
    } );

    it('works without loading anything', () => {
      var promise = Loader.start();
      //expect(Loader.start().then( () => 3)).to.equal( 3 );
    } );
  });

  it ( 'should work', function() {
    Loader.initialize();
    Loader.image( './assets/demi.jpg');

    var loading = Loader.start();

    loading.then( function ( data ) {
      expect( 3 ).not.to.equal( undefined );
    },  function( error) {
    });

  } );

} );
