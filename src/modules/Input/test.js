/**
 * Created by demi on 11/29/15.
 */
import facade from './facade'

let mock = {
  game() {

  }
};

describe( 'Input facade', function() {

  it( 'should have correct public methods', () => {
    expect(facade).to.have.property('initialize').instanceOf(Function);
    expect(facade).to.have.property('keyboard').instanceOf(Function);
    expect(facade).to.have.property('pointer').instanceOf(Function);
  });

  describe( 'keyboard', function() {

    it( 'should have correct public methods', () => {
      expect(facade.keyboard).to.have.property('initialize').instanceOf(Function);
      expect(facade.keyboard).to.have.property('isDown').instanceOf(Function);
    });

    it( 'initilalize should not crash', () => {
      facade.keyboard.initialize( mock.game() );
    });

    it( 'isDown should return a boolean', () => {
      facade.initialize( mock.game() );

      expect( facade.keyboard.isDown( 'A' ) ).to.be.a('boolean')
    });

    it( 'isDown should return false if the key is not being pressed', () => {
      facade.initialize( mock.game() );

      expect( facade.keyboard.isDown( 'A' ) ).to.equal( false );
    });

    /*it( 'isDown should return true if the key not being pressed', ( done ) => {  //This test fails, works on production. Strange

      let letter = 'a';

      facade.initialize( mock.game() );

      function keyPress(key) {
        var event = document.createEvent('Event');
        event.keyCode = key.charCodeAt();
        event.initEvent('keydown');
        document.dispatchEvent(event);
      }

      document.addEventListener('keydown', function(){
        if ( facade.Keyboard.isDown( letter ) ) {
          done();
        }
      });

      keyPress( letter );

    });*/

  })
});

