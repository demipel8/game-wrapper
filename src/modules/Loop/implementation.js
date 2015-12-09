/**
 * Created by demi on 11/21/15.
 */
import base from './interface'
import MainLoop from 'mainloop.js/build/mainloop.min'

const FPS = 60;
const buckets = {
  process: [],
  update: [],
  render: [],
  postRender: []
};

/**
 * Adds a function to one of the different stages of the loop
 * @param bucket {Array} - Stage of the loop
 * @param func {function} - function to add to the arrays
 */
function add( bucket , func ) {
  bucket.push( func );
}

/**
 * Removes a function from one of the different stages of the loop
 * @param bucket {Array} - Stage of the loop
 * @param func {function} - function to remove from the arrays
 * @returns {function} - deleted function
 */
function remove( bucket , func ) {
  var index = bucket.indexOf( func );

  if( !~index ) {
    throw new Error( `function is not part of this bucket` );
  }

  return bucket.splice(index, 1)[0];
}

function executeAll( bucket , delta ) {
  bucket.forEach( function( func ) {
    func( delta ); //for update functions
  })
}

let process = executeAll.bind( null, buckets.process );
let update = executeAll.bind( null, buckets.update );
let render = executeAll.bind( null, buckets.render );
let postRender = executeAll.bind( null, buckets.postRender );

function setFPS( fps ) {
  MainLoop.setMaxAllowedFPS( fps );
}


export default Object.assign( {}, base, {

  addProcess: add.bind( null, buckets.process ),

  addUpdate: add.bind( null, buckets.update ),

  addRender: add.bind( null, buckets.render ),

  addPostRender: add.bind( null, buckets.postRender ),

  removeProcess: remove.bind( null, buckets.process ),

  removeUpdate: remove.bind( null, buckets.update ),

  removeRender: remove.bind( null, buckets.render ),

  removePostRender: remove.bind( null, buckets.postRender ),

  setFPS: setFPS,

  initialize: () => {
    setFPS( FPS )
  },

  start() {
    MainLoop
      .setBegin( process )
      .setUpdate( update )
      .setDraw( render )
      .setEnd( postRender )
      .start();
  },

  stop() {
    if ( MainLoop.isRunning() ) {
      MainLoop.stop();
    }
  },

  getFPS() {
    return Math.round( MainLoop.getMaxAllowedFPS() );
  }

});
