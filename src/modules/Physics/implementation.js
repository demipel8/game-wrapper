import base from './interface'
import { Engine, Runner, Events, Bodies, Body } from 'matter-js'
import Signals from 'signals'
import Render from './render'
import events from './propagation'

//let Engine = Matter.Engine;
//let Runner = Matter.Runner;
//let Events = Matter.Events;
//let Bodies = Matter.Bodies;
//let Body = Matter.Body;

let engine;
let runner;
let game;

export default Object.assign( {}, base, {

  initialize( gameInstance ) {
    game = gameInstance;
  },

  usePhysics() {
    engine = Engine.create( {
      world: {
        bounds: {
          min: { x: 0, y: 0},
          max: { x: game.render.width, y: game.render.height}
        }
      }
    } );

    runner = Runner.create();

    game.loop.addUpdate( function( delta ) {
      Runner.tick(runner, engine, delta );
    });

    events.propagateEvents( Events )

  },

  setGravity( gravity ) {
    engine.world.gravity = gravity;
  },

  rectangle( sprite, options = {} ) {
    sprite._physicBody = Bodies.rectangle( sprite.x + ( sprite.width / 2 ),
      sprite.y + ( sprite.height / 2 ),
      sprite.width,
      sprite.height,
      options
    );

    sprite._physicBody.entity = sprite;
    sprite.matterMoved = false;

    game.render.addUpdate( () => {

      if ( sprite.matterMoved ) {
        sprite.matterMoved = false;
        return;
      }

      Body.setPosition ( sprite._physicBody, {
        x: sprite.x + sprite.width / 2,
        y: sprite.y + sprite.height / 2
      } );

      Body.setAngle ( sprite._physicBody, sprite.rotation );

    });

    //inject signals;

    sprite.collisionStart = new Signals.Signal();
    sprite.collisionEnd = new Signals.Signal();
    sprite.collisionActive = new Signals.Signal();
  }

});
