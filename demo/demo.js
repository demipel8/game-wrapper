/**
 * Created by demi on 11/21/15.
 */

function myGame( game ) {

  var sprite = game.sprite( game, 'icon', 100, 100 );

  var pos = { x: sprite.x(), y : sprite.y() };
  game.tween.get( pos )
    .to( { x: 500} )
    .easing( game.tween.easing.Cubic.In)
    .onUpdate( function() {
      sprite.position( pos.x, pos.y )}
    )
    .start();

  sprite.update( function() {
    if( game.input.keyboard.isDown( 'down' ) ){
      sprite.position( sprite.x(), sprite.y() + 10 );
    }

    if( game.input.keyboard.isDown( 'left' ) ){
      sprite.position( sprite.x() - 10 , sprite.y() );
    }

    if( game.input.keyboard.isDown( 'up') ){
      sprite.position( sprite.x(), sprite.y() - 10 );
    }

    if( game.input.keyboard.isDown( 'right') ){
      sprite.position( sprite.x() + 10, sprite.y() );
    }
  });

  game.audio.play('audio');


}

var game = GW(); // selects modules

game( {
  image: { 'icon': './assets/icon.png' },
  audio: { 'audio': './assets/audio.mp3' }
} , 800, 600, 'webGL' ).then( myGame );

// Change initialization to a config object pattern
