/**
 * Created by demi on 11/7/15.
 */
import defaultConfig from '../config/default';

function GW( userConfig = {}) {

  const config = Object.assign( defaultConfig, userConfig );

  return {
    config,
    gameObjects: []
  }

}


export default GW;
