import base from './interface'
import { Engine, Events, Bodies, Body, World } from 'matter-js'
import Signals from 'signals'
import Render from './render'
import events from './propagation'
import {setPosition, setAngle} from './Polyfill'


let engine;
let game;

export default Object.assign( {}, base, {

  initialize( gameInstance ) {
    game = gameInstance;
  },

  usePhysics( properties = {} ) {
    engine = Engine.create( {
      render: {
        controller: Render,
        options: {
          width: game.render.getWidth(),
          height: game.render.getHeight(),
          hasBounds: properties.hasBounds || false,
          showDebug: false
        }
      },
      world: {
        bounds: {
          min: { x: 0, y: 0},
          max: { x: game.render.getWidth(), y: game.render.getHeight()}
        }
      }
    } );

    game.loop.addUpdate( function( delta ) {
      Engine.update(engine, delta);
      engine.render.controller.world(engine);
    });

    events.propagateEvents( engine, Events );

  },

  setGravity( gravity ) {
    engine.world.gravity = gravity;
  },

  rectangle( sprite, options = {} ) {
    setTimeout(function(){ //Not the solution, temporary fix
      sprite._physicBody = Bodies.rectangle( sprite.x + ( sprite.width / 2 ),
        sprite.y + ( sprite.height / 2 ),
        sprite.width,
        sprite.height,
        options
      );

      sprite._physicBody.entity = sprite;
      sprite.matterMoved = false;

      game.loop.addUpdate( () => {

        if ( sprite.matterMoved ) {
          sprite.matterMoved = false;
          return;
        }

        setPosition ( sprite._physicBody, {
          x: sprite.x + sprite.width / 2,
          y: sprite.y + sprite.height / 2
        } );

        setAngle ( sprite._physicBody, sprite.rotation );

      });

      World.addBody( engine.world, sprite._physicBody );

      sprite.applyForce = Body.applyForce.bind( sprite,
        sprite._physicBody,
        sprite._physicBody.position );
      //inject signals;

      sprite.collisionStart = new Signals.Signal();
      sprite.collisionEnd = new Signals.Signal();
      sprite.collisionActive = new Signals.Signal();
    }, 10);

  }

});
