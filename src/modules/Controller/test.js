/**
 * Created by demi on 11/24/15.
 */

import facade from './implementation';

let mock = {

  game() {

    return {
      loader: {
        initialize: () => {},
        image: () => {},
        audio: () => {},
        json: () => {},
        start: () => {
          return Promise.resolve(1);
        }
      },
      render: {
        initialize: () => {}
      },
      loop: {
        initialize: () => {},
        start: () => {}
      }
    }
  }
};

describe( 'Controller facade', () => {

  it( 'should have correct public methods', () => {
    expect(facade).to.have.property('launch').instanceOf(Function);
  });

  it( 'start should return a promise', () => {
    expect(facade.launch(mock.game(), [1] )).instanceOf( Promise );
  });

  it( 'start should return the game instance in the promise', (done) => {

    facade.launch(mock.game(), [1] ).then((game) => {
      if ( game.loader && game.render && game.loop ) {
        done();
      }
    });
  });
});
