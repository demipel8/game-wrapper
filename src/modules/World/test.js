import facade from './facade';

let mock = {
  game() {
    return {
      loop: {
        addUpdate: () => {}
      }
    }
  },
  empty: {}
};

describe ( 'Worl facade', () => {

  it( 'should have correct public property', () => {
    expect(facade).to.have.property('objects').to.deep.equal([]);

  });

  it( 'should have correct public methods', () => {
    expect(facade).to.have.property('initialize').instanceOf(Function);
    expect(facade).to.have.property('add').instanceOf(Function);
    expect(facade).to.have.property('remove').instanceOf(Function);

  });

  it( 'initialize should not crash', () => {
    facade.initialize( mock.game() );
  });

  it( 'add should add object to objects', () => {

    facade.add( mock.empty );

    expect(facade.objects.length ).to.equal( 1 );

  });

  it( 'remove should remove an object from objects', () => {

    facade.remove( mock.empty );

    expect(facade.objects.length ).to.equal( 0 );

  });

  it( 'remove should break if removes non existent', () => {

    expect( facade.remove.bind( null,  {} ) ).to.throw( Error );

  });

});
