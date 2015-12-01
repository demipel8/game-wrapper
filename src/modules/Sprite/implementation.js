/**
 * Created by demi on 11/23/15.
 */
export default function( game, image, x, y ) {

  let loadedImage = game.loader.getResource( image );
  let sprite = game.render.addSprite( loadedImage.url , x, y );

  game.world.add( sprite );

  function scale( x, y ) {
    sprite.scale.x = x;
    sprite.scale.y = y;
  }

  function position( x, y ) {
    sprite.position.x = x;
    sprite.position.y = y;
  }

  function rotate( amount ) {
    sprite.rotation += amount;
  }

  function getX() {
    return sprite.x
  }

  function getY() {
    return sprite.y
  }

  function setUpdate( callback ) {
    sprite.update = callback;
  }

  return {
    scale,
    position,
    rotate,
    update: setUpdate,
    x : getX,
    y : getY
  };
}
