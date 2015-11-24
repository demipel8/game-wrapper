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

base.getFPS = function( fps ) {
  MainLoop.getFPS( fps );
};

base.process.bind( executeAll );
base.update.bind( executeAll );
base.render.bind( executeAll );
base.postRender.bind( executeAll );

base.start = function() {
  MainLoop
    .setBegin( base.process )
    .setUpdate( base.update )
    .setDraw( base.render )
    .setEnd( base.postRender )
    .start();
};

export default base;
