/**
 * Created by demi on 11/7/15.
 */
import defaultModules from './config/default';

function GW( userModules = {} ) {

  const modules = Object.assign( defaultModules, userModules, { gameObjects: [] } );

  return function LaunchGame( ...gameData ) {
     return modules.controller.launch( modules, gameData );
  }
}

export default GW;
