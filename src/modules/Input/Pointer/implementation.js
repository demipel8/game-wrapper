import base from './interface';
import pointerFactory from './pointer';

let offset = {
  top : 0,
  left : 0
};

let allowMultiple = false;
let globalClick = () => {};


let pointers = [
  pointerFactory(),
  pointerFactory(),
  pointerFactory(),
  pointerFactory(),
  pointerFactory()
];

document.addEventListener( 'mousedown', ( e ) => {
  pointers[0].isDown = true;
  setbutton( pointers[0], e );
  globalClick( e );
});

document.addEventListener( 'mousemove',  setbutton.bind( null, pointers[0] ));

document.addEventListener( 'mouseup', () => {
  pointers[0].isDown = false;
});

document.addEventListener( 'touchstart', ( e ) => {
  e.preventDefault();

  e.touches.forEach( ( e, index ) => {
    pointers[ index ].isDown = true;
    setbutton( pointers[ index ], { x: e.clientX, y: e.clientY } );
  });

  globalClick( e );
});

document.addEventListener( 'touchmove',  ( e ) => {
  e.preventDefault();

  e.touches.forEach( ( e, index ) => {
    pointers[ index ].isDown = true;
    setbutton( pointers[ index ], { x: e.clientX, y: e.clientY } );
  });

});

document.addEventListener( 'touchend', ( e ) => {
  e.preventDefault();

  pointers.forEach( ( element ) => {
    element.isDown = false;
  });
});

function setbutton( button, coordinates ) {
  button.x = coordinates.x - offset.left;
  button.y = coordinates.y - offset.top;
}



export default Object.assign( {}, base, {

  initialize() {
    let container = document.getElementsByTagName('canvas')[ 0 ];
    offset.left = container.offsetLeft;
    offset.top = container.offsetTop;
  },

  main: pointers[0],
  second: pointers[1],
  third: pointers[2],
  fourth: pointers[3],
  fifth: pointers[4],
  all: pointers,

  allowMultiple( value ){

    if ( value ) {
      allowMultiple = value;
    }

    return allowMultiple;
  },

  onClick( callback ) {
    globalClick = callback;
  }

});
