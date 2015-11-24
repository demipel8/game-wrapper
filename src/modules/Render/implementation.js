/**
 * Created by demi on 11/22/15.
 */
import base from './interface'
import pixi from 'pixi.js'

let stage;

base.initialize = function( game, width, height ) {

  let renderer = new pixi.WebGLRenderer(width, height);
  document.body.appendChild(renderer.view);

  stage = new pixi.Container();

  game.loop.addRender( renderer.render.bind( renderer, stage) );
};

base.addSprite = function( image , x, y) {
  let sprite = new PIXI.Sprite.fromImage( image );

  sprite.position.x = x;
  sprite.position.y = y;

  stage.addChild(sprite);

  return sprite;
};

export default base;
