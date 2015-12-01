/**
 * Created by demi on 11/22/15.
 */
import base from './interface'
import { Engine, Runner, Events, Bodies } from 'matter-js'
import Signals from 'signals'
import Render from './render'
import events from './propagation'

//let Engine = Matter.Engine;
//let Runner = Matter.Runner;
//let Events = Matter.Events;
//let Bodies = Matter.Bodies;

let engine;
let runner;
let game;

base.initialize = function( gameInstance ) {
  game = gameInstance;
}

base.usePhysics = function() {
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

};

base.setGravity = function( gravity ) {
  engine.world.gravity = gravity;
};

base.rectangle = function( sprite, options = {} ) {
    sprite._physicBody = Bodies.rectangle( sprite.x + ( sprite.width / 2 ),
      sprite.y + ( sprite.height / 2 ),
      sprite.width,
      sprite.height,
      options
    );

  sprite._physicBody.entity = sprite;

  //inject signals;

  sprite.collisionStart = new Signals.Signal();
  sprite.collisionEnd = new Signals.Signal();
  sprite.collisionActive = new Signals.Signal();
};

export default base;
