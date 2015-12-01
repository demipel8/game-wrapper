/**
 * Created by demi on 12/1/15.
 */

let Render = {
  create: function (options) {
    var defaults = {
      controller: Render,
      element: null,
      options: {
        width: 640,
        height: 960,
        wireframeBackground: '#222',
        hasBounds: false,
        enabled: true,
        wireframes: false,
        showSleeping: true,
        showDebug: false,
        showBroadphase: false,
        showBounds: false,
        showVelocity: false,
        showCollisions: false,
        showSeparations: false,
        showAxes: false,
        showPositions: false,
        showAngleIndicator: false,
        showIds: false,
        showShadows: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false
      }
    };

    var render = Common.extend( defaults, options );

    render.textures = {};

    render.bounds = render.bounds || {
        min: {
          x: 0,
          y: 0
        },
        max: {
          x: render.options.width,
          y: render.options.height
        }
      };

    return render;
  },

  world : ( engine ) => {},
  debug : ( engine ) => {},
  constraints : ( constraints ) => {},
  bodies : ( endinge, bodies ) => {}

};

export default Render;



