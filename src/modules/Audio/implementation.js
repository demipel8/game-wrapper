
import base from './interface'
import Audio from 'howler'

const sounds = [];
base.initialize = function( game ) {


};

base.get = function( name ) {
  let requested = sounds[ name ];

  if ( checkAudio( requested ) ) {
    return requested;
  }
};

base.sounds = sounds;

function executeSoundAction( action, name ) {
  let requested = sounds[ name ];

  if ( checkAudio( requested ) ) {
    requested[ action ]();
  }
}

function checkAudio( requested ) {
  if ( !requested ) {
    throw new Error( `the audio ${name} doesn't exists` );
  }

  return true;
}

base.play = executeSoundAction.bind( null, 'play' );
base.pause = executeSoundAction.bind( null, 'pause' );
base.stop = executeSoundAction.bind( null, 'stop' );


export default base;
