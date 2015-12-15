/**
 * Polyfill for Edge-Matter functions to work on stable vertion
 **/

import {Vector, Vertices, Bounds, Axes} from 'matter-js';

export function setPosition(body, position) {
  var delta = Vector.sub(position, body.position);
  body.positionPrev.x += delta.x;
  body.positionPrev.y += delta.y;

  if ( body.parts ) {
    for (var i = 0; i < body.parts.length; i++) {
      var part = body.parts[i];
      part.position.x += delta.x;
      part.position.y += delta.y;
      Vertices.translate(part.vertices, delta);
      Bounds.update(part.bounds, part.vertices, body.velocity);
    }
  }
}

export function setAngle(body, angle) {
  var delta = angle - body.angle;
  body.anglePrev += delta;

  if ( body.parts ) {
    for (var i = 0; i < body.parts.length; i++) {
      var part = body.parts[i];
      part.angle += delta;
      Vertices.rotate(part.vertices, delta, body.position);
      Axes.rotate(part.axes, delta);
      Bounds.update(part.bounds, part.vertices, body.velocity);
      if (i > 0) {
        Vector.rotateAbout(part.position, delta, body.position, part.position);
      }
    }
  }
}
