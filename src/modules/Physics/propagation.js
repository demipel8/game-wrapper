/**
 * Created by demi on 12/1/15.
 */


export default  {
  propagateEvents( engine, Events ) {
    ['collisionStart', 'collisionEnd', 'collisionActive'].forEach(function (collisionEvent) {
      Events.on(engine, collisionEvent, function (e) {
        var pairs = e.pairs;

        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i];

          pair.bodyA.entity[event].dispatch( {
            target: pair.bodyB.entity,
            event: e
          } );

          pair.bodyB.entity[event].dispatch( {
            target: pair.bodyA.entity,
            event: e
          } );
        }
      });
    });
  }
}
