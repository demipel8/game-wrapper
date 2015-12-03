import facade from './facade';

let mock = {

  EmptyLoader() {

    return  {
      loader: {
        getResource: () => undefined
      }
    };
  },

  Loader() {

    return  {
      loader: {
        getResource() {
          return { name: 'audio', url: 'http://localhost:9876/base/demo/assets/audio.mp3' };
        }
      }
    };
  }
};


describe('Audio Facade', () =>{


  it('should have correct public methods', () => {
    expect(facade).to.have.property('initialize').instanceOf(Function);
    expect(facade).to.have.property('play').instanceOf(Function);
    expect(facade).to.have.property('pause').instanceOf(Function);
    expect(facade).to.have.property('stop').instanceOf(Function);
    expect(facade).to.have.property('get').instanceOf(Function);
    expect(facade).to.have.property('getSounds').instanceOf(Function);
  });

  it('sounds property should be an empty object', () => {
    expect(facade.getSounds()).to.deep.equal({});
  });

  it('get method should fail if audio doesn\'t exists audio', () => {

    facade.initialize( mock.EmptyLoader() );

    expect(facade.get.bind(facade, 'audio')).to.throw( Error );
  });

  it('get method should return a existing audio', () => {

    facade.initialize( mock.Loader() );

    let audio = facade.get('audio');

    expect(facade.get('audio')).to.deep.equal( audio );
  });


  it('play method should fail if audio doesn\'t exists' , () => {
    facade.initialize( mock.EmptyLoader() );
    expect( facade.play.bind( null, 'audio') ).to.throw( Error );
  });

  it('pause method should fail if audio doesn\'t exists' , () => {
    facade.initialize( mock.EmptyLoader() );
    expect( facade.pause.bind( null, 'audio') ).to.throw( Error );
  });

  it('stop method should fail if audio doesn\'t exists' , () => {
    facade.initialize( mock.EmptyLoader() );
    expect( facade.stop.bind( null, 'audio') ).to.throw( Error );
  });

  it('play method should work if audio exits' , () => {
    facade.initialize( mock.Loader() );

    expect(facade.play( 'audio' )).not.to.equal( false );
  });

  it('pause method should work if audio exits' , () => {
    facade.initialize( mock.Loader() );

    expect(facade.pause( 'audio' )).not.to.equal( false );
  });

  it('stop method should work if audio exits' , () => {
    facade.initialize( mock.Loader() );

    expect(facade.stop( 'audio' )).not.to.equal( false );
  });

  it('play method return the audio work if audio exits' , () => {
    facade.initialize( mock.Loader() );

    let audio = facade.get('audio');

    expect(facade.play('audio')).to.deep.equal( audio );
  });

  it('pause method return the audio work if audio exits' , () => {
    facade.initialize( mock.Loader() );

    let audio = facade.get('audio');

    expect(facade.pause('audio')).to.deep.equal( audio );
  });

  it('stop method return the audio work if audio exits' , () => {
    facade.initialize( mock.Loader() );

    let audio = facade.get('audio');

    expect(facade.stop('audio')).to.deep.equal( audio );
  });



});
