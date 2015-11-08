/**
 * Created by demi on 11/8/15.
 */
import base from '../interfaces/I_Loader'
import RL from '../../../libs/resource-loader.min'

let loader;

function initialize() {
  loader = new RL();
}

function start() {
  loader.load();
}

function genericLoad( name, url ) {
  loader.add( name, url );
}

base.initialize = initialize;
base.start = start;
base.image = genericLoad;
base.audio = genericLoad;
base.loader = () => loader;

export default base;
