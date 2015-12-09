/**
 * Created by demi on 11/8/15.
 */
import facade from './facade';

let mock = {
  game() {
    return {
      resource: (asset) => asset
    }
  }
};

describe ( 'Loader facade', () => {

  it( 'should have correct public methods', () => {
    expect(facade).to.have.property('initialize').instanceOf(Function);
    expect(facade).to.have.property('start').instanceOf(Function);
    expect(facade).to.have.property('image').instanceOf(Function);
    expect(facade).to.have.property('audio').instanceOf(Function);
    expect(facade).to.have.property('json').instanceOf(Function);
    expect(facade).to.have.property('getResource').instanceOf(Function);
  });

  it( 'initialize should return himself', () => {
    facade.initialize( mock.game() );

    expect(facade.initialize( mock.game() )).to.deep.equal( facade );
  });

  it( 'start should return a promise', () => {
    facade.initialize( mock.game() );

    expect(facade.start()).instanceOf( Promise );
  });

  it( 'start work without loading any resource', () => {
    facade.initialize( mock.game() );
    facade.start().then( () => {
        done();
    })
  });

  it('should load an image', (done) => {
    facade.initialize( mock.game() );

    let resource = {
      name: 'image',
      url: 'http://localhost:9876/base/demo/assets/icon.png'
    };

    facade.image( resource.name, resource.url );

    facade.start().then( () => {
      if ( facade.getResource( resource.name ).url = resource.url ) {
        done();
      }
    })
  });

  it('should load an audio', (done) => {
    facade.initialize( mock.game() );

    let resource = {
      name: 'audio',
      url: 'http://localhost:9876/base/demo/assets/audio.mp3'
    };

    facade.audio( resource.name, resource.url );

    facade.start().then( () => {
      if ( facade.getResource( resource.name ).url = resource.url ) {
        done();
      }
    })
  });

  it('should load a json', (done) => {
    facade.initialize( mock.game() );

    let resource = {
      name: 'json',
      url: 'http://localhost:9876/base/demo/assets/text.json'
    };

    facade.audio( resource.name, resource.url );

    facade.start().then( () => {
      if ( facade.getResource( resource.name ).url = resource.url ) {
        done();
      }
    })
  });

} );
