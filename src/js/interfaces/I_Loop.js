/**
 * Created by demi on 11/21/15.
 */

const empty = () => {};
const loop = {};
const functions = {
  process: [],
  update: [],
  render: [],
  postRender: []
};
/**
 * Adds a function to one of the different stages of the loop
 * @param stage {string} - Stage of the loop
 * @param func {function} - function to add to the arrays
 */
function add( stage , func ) {
  functions[ stage ].push( func );
}

/**
 * Removes a function from one of the different stages of the loop
 * @param stage {string} - Stage of the loop
 * @param func {function} - function to remove from the arrays
 */
function remove( stage , func ) {
  var index = functions[ stage ].indexOf( func );

  if( !~index ) {
    throw new Error( 'function is not part of ' + stage );
  }

  functions[type].splice(index, 1);
}

for( let stage in functions ) {
  let capitalizeFistLetter = stage.charAt(0).toUpperCase() + stage.slice(1);
  loop[ `add${capitalizeFistLetter}`] = add.bind( null, stage );
  loop[ `remove${capitalizeFistLetter}`] = remove.bind( null, stage );
}


export default Object.assign( loop, {
  /**
   * used to start the loop
   */
  start: empty,
  /**
   * executed before the update method to perform activities such as user input
   */
  process: empty,
  /**
   * Updates state of the objects
   */
  update: empty,
  /**
   * render function
   */
  render: empty,
  /**
   * Executes after rendering function to polish results
   */
  postRender: empty,
  /**
   * get the number of FPS the game is running at
   */
  getFPS: empty,
  /**
   * Set Desired FPS
   */
  setFPS: empty,
  /**
   * Default FPS
   */
  FPS: 60,
  functions
});
