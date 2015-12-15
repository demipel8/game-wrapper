/**
 * Created by demi on 11/21/15.
 */

function myGame( game ) {

  /*game.input.pointer.onClick( function( e ) {
    console.log( 'Me llega el siguiente evento!' );
    console.log( e );
  });*/

  var sprite = game.sprite( game, 'icon', 100, 100 );

  var pos = { x: sprite.x(), y : sprite.y() };
  game.tween.get( pos )
    .to( { x: 500} )
    .easing( game.tween.easing.Cubic.In )
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

  var sprite2 = game.sprite( game, 'icon', 200, 200 );
  game.physics.usePhysics();
  game.physics.setGravity({ x:0, y: 0.22222});

  game.physics.rectangle(sprite2.raw);

  setTimeout( function(){sprite2.raw.applyForce( {x: 2, y:0})}, 100)

  setInterval( function() {
    //console.log(sprite2.raw._physicBody)
    console.log(sprite2.raw._physicBody.position.x,sprite2.raw._physicBody.position.y)
  }, 500);

}

var game = GW(); // selects modules

game( {
  image: { 'icon': './assets/icon.png' },
  audio: { 'audio': './assets/audio.mp3' }
} , 800, 600, 'webGL' ).then( myGame );

// Change initialization to a config object pattern
