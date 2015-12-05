
import base from './interface'
import pixi from 'pixi.js/bin/pixi'

let stage;
let width;
let height;
let defaultWith = 800;
let defaultHeight = 600;
let renders = {
  ['Canvas'] : pixi.CanvasRenderer,
  ['webGL'] : pixi.WebGLRenderer
};


function moveTo( obj, x, y ) {
  obj.position.x = x;
  obj.position.y = y;
}

function addToStage( obj ) {

  stage.addChild(obj);
}

/**
 * Sets an object to a position and adds it to the stage
 * @private
 * @param {Object} obj - new object
 * @param {number} x=0  - x position
 * @param {number} y=0 - y position
 * @returns {Object} - the new object
 */
function getReady( obj, x = 0, y = 0  ) {
  moveTo( obj, x, y );
  addToStage( obj );

  return obj;
}

export default Object.assign( {}, base, {

  initialize( game, gameWidth = defaultWith, gameHeight = defaultHeight, renderTech = 'webGL' ) {

    width = gameWidth;
    height = gameHeight;

    let renderer = new renders[ renderTech ](width, height);
    document.body.appendChild(renderer.view);

    stage = new pixi.Container();

    game.loop.addRender( renderer.render.bind( renderer, stage ) );

  },

  addSprite( image , x, y ) {

    return getReady( new PIXI.Sprite.fromImage( image ), x, y );
  },

  removeSprite( sprite ) {
    stage.removeChild( sprite );
  },

  addText( text, x, y, style ){

    return getReady( new PIXI.Text(text , style ), x, y );
  },

  removeText( text ){
    stage.removeChild( text );
  },

  getWidth() {
    return width;
  },

  getHeight() {
    return height;
  }

});
