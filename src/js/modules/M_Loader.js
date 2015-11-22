/**
 * Created by demi on 11/8/15.
 */
import base from '../interfaces/I_Loader'
import RL from '../../../libs/resource-loader.min'

let loader = {};
let loadedResources = [];

/**
 * Instantiates the resource-loader object
 */
function initialize() {
  loader = new RL();
  return base;
}
 /**
  * Returns a promise that will be resolved once all queued resources are loaded
  * @returns promise
  **/
function start() {
  return new Promise(
    function( resolve, reject ) {
      loader.load(function (loader, resources) {
        loadedResources = resources;
      });

      loader.on( 'complete', resolve );
      loader.on('error', reject );
    }
  )
}

/**
 * Adds an element to the resource queue
 * @param name
 * @param url
 */
function genericLoad( name, url ) {
  loader.add( name, url );
}

base.initialize = initialize;
base.start = start;
base.image = genericLoad;
base.audio = genericLoad;
base.json = genericLoad;
base.resources = loadedResources;

export default base;
