/**
 * Created by demi on 11/7/15.
 */
import defaultModules from './config/default';

function GW( userModules = {}, ...gameData ) {

  const modules = Object.assign( defaultModules, userModules, { gameObjects: [] } );

  return modules.controller.launch( gameData, modules );
}

export default GW;
