/**
* Moves an entity according to matter calculations
 * @private
 * @param  {object}  options    engine.options
 * @param  {object}  part       part to be moved
 * @param  {Boolean} isSleeping
 */
function _moveEntity ( options, part, isSleeping ) {
  var entity = part.entity;

  if ( options.showSleeping && isSleeping ) {
    entity.alpha = 0.5;
  }

  if ( entity.x !== part.position.x - ( entity.width / 2 ) ) {
    entity.matterMoved = true;
    entity.x = part.position.x - ( entity.width / 2 );
  }

  if ( entity.y !== part.position.y - ( entity.height / 2 ) ) {
    entity.matterMoved = true;
    entity.y = part.position.y - ( entity.height / 2 );
  }

  _rotateEntity( entity,  part.angle );

}

function _rotateEntity( entity, angle ) {

  if ( angle === 0 || entity.rotation === angle.toFixed( 3 ) ) {
    return;
  }

  entity.matterMoved = true;
  entity.rotation = angle.toFixed( 3 );
}

let Render = {
  create: function (options) {
    var defaults = {
      controller: Render,
      element: null,
      options: {
        width: 800,
        height: 600,
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
  bodies : ( engine, bodies ) => {
      var render = engine.render;
      var options = render.options;
      var body;
      var entity;
      var i;
      var k;

      for ( i = 0; i < bodies.length; i++ ) {
        body = bodies[ i ];
        entity = body.entity;

        if ( !body.render.visible ) {
          continue;
        }

        if ( !body.parts ) {
          _moveEntity( options, body, body.isSleeping );
        } else {

          // Handle compound parts
          for ( k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++ ) {
            _moveEntity( options, body.parts[ k ], body.isSleeping );
          }
        }
      }
  }

};

export default Render;



