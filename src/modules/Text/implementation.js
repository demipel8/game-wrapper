/**
 * Created by demi on 11/23/15.
 */
export default function( game, text, x, y, styles ) {

  let textObject = game.render.addText( text , x, y, styles);

  game.world.add( textObject );

  function scale( x, y ) {
    textObject.scale.x = x;
    textObject.scale.y = y;
  }

  function position( x, y ) {
    textObject.position.x = x;
    textObject.position.y = y;
  }

  function rotate( amount ) {
    textObject.rotation += amount;
  }

  function getX() {
    return textObject.x
  }

  function getY() {
    return textObject.y
  }

  function setUpdate( callback ) {
    textObject.update = callback;
  }

  return {
    scale,
    position,
    rotate,
    update: setUpdate,
    x : getX,
    y : getY,
    raw: textObject
  };
}
