/**
 * Created by demi on 11/21/15.
 */
var GOOD = 0;
var EVIL = 1;
var TEAMS = {};
var interval;
var intervalCount;
var clicks;
var maxEnemies = 5;


function myGame( game ) {
  var text = game.text(game, 'START THE GAME', 300, 275, {
    font : '24px Arial', fill : 0xffffff, align : 'center'
  } );

  var textDanger;

  game.input.pointer.onClick(launchLevel);

  function launchLevel() {
    text.raw.text = '';
    clicks = 0;
    TEAMS[GOOD] = 0;
    TEAMS[EVIL] = 0;

    textDanger = game.text(game, 'Danger: 0/' + maxEnemies, 600, 75, {
      font : '20px Arial', fill : 0xffffff, align : 'center'
    } );

    game.physics.usePhysics();
    game.physics.setGravity({ x:0, y: 0.5});

    makeWalls( game );

    game.audio.loop('audio', true);
    game.audio.play('audio');



    interval = setInterval( function() {
      Enemy( game, 'player', getX(), 50, EVIL );

    }, 2000);

    game.loop.addUpdate( function() {
      if( interval ) {
        var count = 0;
        game.world.objects.forEach( function(sprite) {
          if(sprite._physicBody && !sprite._physicBody.isStatic){
            if (sprite.y > 450) {
              count++;
            }
          }
        });

        textDanger.raw.text = 'Danger: ' + count + '/' + maxEnemies;

        if( count >= maxEnemies ) {
          endGame();
        }
      }
    });

    game.input.pointer.onClick(function(e){

      game.world.objects.forEach( function(sprite) {
        if(sprite._physicBody && !sprite._physicBody.isStatic){
          if (checkClick(sprite,e)) {
            sprite.applyForce({x:0, y: -0.3});
            clicks++;
          }
        }
      })
    })
  }

  function endGame() {
    clearInterval(interval);
    interval = 0;
    game.audio.stop('audio');
    game.input.pointer.onClick(function(e){});
    text.raw.x = 325;
    text.raw.y = 100;
    text.raw.text = 'GAME OVER\n POINTS: ' + clicks;

    setTimeout( function() {
      hideScene(game);
      text.raw.text = '';
      textDanger.raw.text = '';
    }, 500);
  }

}

var game = GW(); // selects modules

game( {
  image: {
    'icon': './assets/icon.png',
    'player': './assets/p1_stand.png',
    'enemy': './assets/slimeWalk2.png',
    'platform': './assets/box.png',
    'wall': './assets/boxEmpty.png'
  },
  audio: { 'audio': './assets/audio.wav' }
} , 800, 600, 'webGL' ).then( myGame );

function makeWalls( game ) {

  var i;
  var j;
  for ( i = -35; i < game.render.getWidth(); i+=70) {
    Wall( game, 'wall', i, -35);
  }

  for ( i = -35, j = 35; j < game.render.getHeight(); j+=70) {
    Wall( game, 'wall', i, j);
  }

  for ( i = game.render.getWidth() - 35, j = 35; j < game.render.getHeight(); j+=70) {
    Wall( game, 'wall', i, j);
  }

  for ( i = -35, j = game.render.getHeight() - 35; i < game.render.getWidth(); i+=70) {
    Wall( game, 'wall', i, j);
  }
}

// Change initialization to a config object pattern
function Wall( game, image, x, y) {
  var sprite =  game.sprite( game, image, x, y );
  game.physics.rectangle(sprite.raw, {
    isStatic: true
  });

  return sprite;

}

function Enemy( game, image, x, y, team ) {
  var sprite = game.sprite( game, image, x, y );
  game.physics.rectangle(sprite.raw, {
    friction : 0,
    restitution : 0.8
  });

  sprite.team = team;
  TEAMS[team]++;

  return sprite;
}

function getX() {
  return 35 + 70 * Math.floor((Math.random() * 10));
}

function checkClick(target, event) {
  return event.x >= target.x &&
    event.x <= target.x + target.width &&
    event.y >= target.y &&
    event.y <= target.y + target.height
}

function hideScene( game ){
  game.world.objects.forEach( function( element ) {

    if (element._physicBody) {
      element.setStatic(false);
      var pos = { x: element.x, y : element.y };
      game.tween.get( element )
        .to( { y: 1000} )
        .easing( game.tween.easing.Cubic.In )
        /*.onUpdate( function() {
          element.x = pos.x;
          element.y = pos.y;
        )*/
        .start();
    }
  });
}
