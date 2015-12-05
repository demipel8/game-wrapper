import facade from './facade';

let mock = {
  game: () => {
    return {
      loop: {
        addRender: () => {}
      }
    }
  },

  url: 'http://localhost:9876/base/demo/assets/icon.png'
};

describe( 'Render facade', () => {

  it( 'should have correct public methods', () => {
    expect(facade).to.have.property('initialize').instanceOf(Function);
    expect(facade).to.have.property('addSprite').instanceOf(Function);
    expect(facade).to.have.property('removeSprite').instanceOf(Function);
    expect(facade).to.have.property('addText').instanceOf(Function);
    expect(facade).to.have.property('removeText').instanceOf(Function);
    expect(facade).to.have.property('getWidth').instanceOf(Function);
    expect(facade).to.have.property('getHeight').instanceOf(Function);
  });

  it( 'initialize should not crash', () => {
    facade.initialize( mock.game(), 800, 600, 'Canvas' ); //PhantomJS doesn't support webGL
  });

  it( 'addSprite should return a sprite', () => {
    facade.initialize( mock.game(), 800, 600, 'Canvas' );
    facade.addSprite( mock.url, 0, 0 );
  });

  it( 'addText should return a text', () => {
    facade.initialize( mock.game(), 800, 600, 'Canvas' );
    facade.addText( 'a text', 0, 0 );
  });

  it( 'removeSprite should not crash', () => {
    facade.initialize( mock.game(), 800, 600, 'Canvas' );
    facade.removeSprite( facade.addSprite( mock.url, 0, 0 ) );
  });

  it( 'removeText should not crash', () => {
    facade.initialize( mock.game(), 800, 600, 'Canvas' );
    facade.removeText( facade.addText( 'a text', 0, 0 ) );
  });

  it( 'getWidth should return width', () => {
    let width = 800;
    facade.initialize( mock.game(), width, 600, 'Canvas' );
    expect(facade.getWidth()).to.equal( width );
  });

  it( 'getHeight should return width', () => {
    let height = 600;
    facade.initialize( mock.game(), 800, height, 'Canvas' );
    expect(facade.getHeight()).to.equal( height );
  });

});
