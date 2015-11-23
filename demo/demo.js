/**
 * Created by demi on 11/21/15.
 */

function myGame( game ) {

  var sprite = game.sprite( game, 'icon', 100, 100 );

  setInterval( function() {
    sprite.position( sprite.x() + 3, sprite.y() );
  }, 500 );
}

GW({}, { image: { 'icon': './assets/icon.png' } } ).then( myGame );
