import facade from './facade';

let mock = {
  game() {
    return {
      loader: {
        getResource: () => ({ name: 'John Doe', url: 'http://Url/Doe'})
      },
      render: {
        addSprite: () => ({
          scale: { x: 0, y: 0 },
          position: { x: 0, y: 0 },
          rotation: 0,
          update: () => {}
        }),
        removeSprite: (sprite) => sprite
      },
      world: {
        add: () => {}
      }
    }
  }
};

describe( 'Sprite facade', () => {

  it( 'should return a sprite', () => {
    facade( mock.game(), 'image', 0, 0 );
  });

  it( 'destroy should not crash', () => {

    facade( mock.game(), 'image', 0, 0 ).destroy()
  });

});
