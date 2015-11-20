/**
* Entry point for webpack bundle
**/

require( 'babel-polyfill' );
require("expose?GW!./GW.js"); //Exposes GW as a global variable

import GW from './GW';

export default GW;
