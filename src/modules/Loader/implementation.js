/**
 * Created by demi on 11/8/15.
 */
import base from './interface'
import RL from 'resource-loader/src/index'

let loadedResources = {};
let loader;
let game;

function genericLoad( name, url ) {
  loader.add( name, url );
}

export default Object.assign({}, base, {

  image: genericLoad,

  audio: genericLoad,

  json: genericLoad,

  initialize( gameInstance ) { //TODO ¿Inject game reference?
    game = gameInstance;
    loader = new RL();
    return this;
  },

  start() {
    return new Promise(
      function( resolve, reject ) {
        loader.load(function (loader, resources) {
          loadedResources = Object.assign( loadedResources, resources );
        });

        loader.on( 'complete', resolve );
        loader.on('error', reject );
      }
    )
  },

  getResource( name ) {
    return game.resource( loadedResources[ name ] );
  }
});
