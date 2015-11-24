/**
 * Created by demi on 11/21/15.
 */

const empty = () => {};
const loop = {};
const buckets = {
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
  buckets[ stage ].push( func );
}

/**
 * Removes a function from one of the different stages of the loop
 * @param stage {string} - Stage of the loop
 * @param func {function} - function to remove from the arrays
 */
function remove( stage , func ) {
  var index = buckets[ stage ].indexOf( func );

  if( !~index ) {
    throw new Error( 'function is not part of ' + stage );
  }

  buckets[type].splice(index, 1);
}

/**
 * Injects the asked bucket on to a callback function
 * @param bucket { object } - list of functions
 * @param callback { fucntion } - callback function
 * @private
 *
 */
function _callbackWithBucket( bucket, callback ) {
  callback( bucket );
}

for( let stage in buckets ) {
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
  process: _callbackWithBucket.bind( null, buckets.process ),
  /**
   * Updates state of the objects
   */
  update: _callbackWithBucket.bind( null, buckets.update ),
  /**
   * render function
   */
  render: _callbackWithBucket.bind( null, buckets.render ),
  /**
   * Executes after rendering function to polish results
   */
  postRender: _callbackWithBucket.bind( null, buckets.postRender ),
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
  FPS: 60
});
