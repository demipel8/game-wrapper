
import base from './interface'
import Audio from 'howler'

const formats = ['mp3', 'ogg', 'wav' ];

let sounds = {};
let game;

function executeSoundAction( action, name, param ) {

  if ( checkAudio( name ) ) {
    return sounds[ name ][ action ]( param );
  }
  return false;
}

function checkAudio( name ) {

  let requested = sounds[ name ];

  if ( !requested ) {

    let audioResource = game.loader.getResource( name );

    if ( audioResource && checkFormat( audioResource.url ) ) {
      sounds[ name ] = new Audio.Howl( {
          urls: [ audioResource.url ]
      } );

    } else {
      throw new Error( `the audio ${name} doesn't exists` );

    }
  }

  return true;
}

function checkFormat( audio ) {
  let format = audio.substr(-3);  //all formats have 3 letters name

  return !!~formats.indexOf( format );
}

export default Object.assign({}, base, {

  play: executeSoundAction.bind( null, 'play' ),

  pause: executeSoundAction.bind( null, 'pause' ),

  stop: executeSoundAction.bind( null, 'stop' ),

  loop: executeSoundAction.bind( null, 'loop' ),

  initialize( gameInstance ){
    game = gameInstance;
    sounds = {};
  },

  getSounds() {
    return sounds;
  },

  get( name ) {

    if ( checkAudio( name ) ) {
      return sounds[ name ];
    }
  }

});
