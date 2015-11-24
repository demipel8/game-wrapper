/**
 * Created by demi on 11/8/15.
 */
import base from '../interfaces/I_Loader'
import RL from '../../../libs/resource-loader.min'

let loader = {};
let loadedResources = {};
let gameRef;

function initialize( game ) { //TODO ¿Inject game reference?
  gameRef = game;
  loader = new RL();
  return base;
}

function start() {
  return new Promise(
    function( resolve, reject ) {
      loader.load(function (loader, resources) {
        loadedResources = Object.assign( loadedResources, resources );
      });

      loader.on( 'complete', resolve );
      loader.on('error', reject );
    }
  )
}

function genericLoad( name, url ) {
  loader.add( name, url );
}

function getResource( name ) {
  return gameRef.resource( loadedResources[ name ] );
}

base.initialize = initialize;
base.start = start;
base.image = genericLoad;
base.audio = genericLoad;
base.json = genericLoad;
base.getResource = getResource;

export default base;
