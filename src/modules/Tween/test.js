import facade from './facade';

let mock = {
  game() {
    return {
      loop: {
        addUpdate: (callback) => { setTimeout( callback.bind(100), 100) }
      }
    }
  }
};

describe( 'Tween facade', () => {

  it( 'should have correct public property', () => {
    expect(facade).to.have.property('easing').to.be.an('object');

  });

  it( 'should have correct public methods', () => {
    expect(facade).to.have.property('initialize').instanceOf(Function);
    expect(facade).to.have.property('get').instanceOf(Function);
  });

  it( 'initialize does not crash', () => {
    facade.initialize( mock.game() );
  });

  it( 'get returns a tween object', ( done ) => {
    let tween = facade.get( { x: 100 } );

    tween.to({ x : 200 }, 100);
    tween.onComplete( () => { done();});
    tween.start();

  });
});
