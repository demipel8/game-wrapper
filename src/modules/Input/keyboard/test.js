/**
 * Created by demi on 11/29/15.
 */
import keyboard from 'keypress.js'

let listener = new keyboard.Listener();

describe( 'trying keyboard', function() {
  beforeEach(function () {
    listener = new keyboard.Listener();
  });

  it( 'should work', function() {
    function keyPress(key) {
      var event = document.createEvent('Event');
      event.keyCode = key;
      event.initEvent('keydown');
      document.dispatchEvent(event);
    }


    document.addEventListener('keydown', function(e){
      console.log ( listener._keys_down );
    });

    keyPress('34')

  })
});

