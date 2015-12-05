import base from './interface';

export default function( game, image, x, y ) {

  let loadedImage = game.loader.getResource( image );
  let sprite = game.render.addSprite( loadedImage.url , x, y );

  game.world.add( sprite );

  return Object.assign( {}, base, {

    scale( x, y ) {
      sprite.scale.x = x;
      sprite.scale.y = y;
    },

    position( x, y ) {
      sprite.position.x = x;
      sprite.position.y = y;
    },

    rotate( amount ) {
      sprite.rotation += amount;
    },

    update( callback ) {
      sprite.update = callback;
    },

    destroy() {
      game.render.removeSprite( sprite );
    },

    x() {
      return sprite.x;
    },

    y() {
      return sprite.y;
    }

  });
}
