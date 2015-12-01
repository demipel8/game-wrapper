/**
 * Created by demi on 11/21/15.
 */

function myGame( game ) {

  var sprite = game.sprite( game, 'icon', 100, 100 );

  /*setInterval( function() {
    sprite.position( sprite.x() + 3, sprite.y() );
  }, 500 );*/

  sprite.update( function() {
    if( game.input.keyboard.isDown[ 'down '] ){
      sprite.position( sprite.x(), sprite.y() + 10 );
    }
  });


}

var game = GW(); // selects modules

game( { image: { 'icon': './assets/icon.png' } } , 800, 600, 'webGL' ).then( myGame );

// Change initialization to a config object pattern
