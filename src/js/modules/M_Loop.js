/**
 * Created by demi on 11/21/15.
 */
import base from '../interfaces/I_Loop'
import MainLoop from '../../../node_modules/mainloop.js/build/mainloop.min'

function executeAll( stage ) { //TODO signaling system???
  base.functions[ stage ].forEach( function( func ) {
    func();
  })
}

base.setFPS = function( fps ) {
  MainLoop.setMaxAllowedFPS( fps );
};

base.getFPS = function( fps ) {
  MainLoop.getFPS( fps );
};

base.process = executeAll.bind( null, 'process' );
base.update = executeAll.bind( null, 'update' );
base.render = executeAll.bind( null, 'render' );
base.postRender = executeAll.bind( null, 'postRender' );

base.start = function() {
  MainLoop
    .setBegin( base.process )
    .setUpdate( base.update )
    .setDraw( base.render )
    .setEnd( base.postRender )
    .start();
};

export default base;
