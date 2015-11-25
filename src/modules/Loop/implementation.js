/**
 * Created by demi on 11/21/15.
 */
import base from './interface'
import MainLoop from 'mainloop.js/build/mainloop.min'

function executeAll( bucket ) {
  bucket.forEach( function( func ) {
    func();
  })
}

base.setFPS = function( fps ) {
  MainLoop.setMaxAllowedFPS( fps );
};

base.getFPS = function() {
  return Math.round( MainLoop.getMaxAllowedFPS() );
};

base._setProcess( executeAll );
base._setUpdate( executeAll );
base._setRender( executeAll );
base._setPostRender( executeAll );

base.start = function() {
  MainLoop
    .setBegin( base.process )
    .setUpdate( base.update )
    .setDraw( base.render )
    .setEnd( base.postRender )
    .start();
};

base.setFPS( base.FPS );

export default base;
