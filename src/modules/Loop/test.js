/**
 * Created by demi on 11/21/15.
 */
import babelPolyFill from '../../../node_modules/babel-polyfill/browser'
import base from './interface';
import Loop from './implementation';

describe('Loop: Interface must comply with the specification', () => {

  it('should have the FPS public property', () => {
      expect(Loop).to.have.property('FPS').to.be.a('number');
  });

    it('should have correct public methods', () => {
      expect(Loop).to.have.property('start').instanceOf(Function);
      expect(Loop).to.have.property('process').instanceOf(Function);
      expect(Loop).to.have.property('update').instanceOf(Function);
      expect(Loop).to.have.property('render').instanceOf(Function);
      expect(Loop).to.have.property('postRender').instanceOf(Function);
      expect(Loop).to.have.property('getFPS').instanceOf(Function);
      expect(Loop).to.have.property('setFPS').instanceOf(Function);
      expect(Loop).to.have.property('addProcess').instanceOf(Function);
      expect(Loop).to.have.property('removeProcess').instanceOf(Function);
      expect(Loop).to.have.property('addUpdate').instanceOf(Function);
      expect(Loop).to.have.property('removeUpdate').instanceOf(Function);
      expect(Loop).to.have.property('addRender').instanceOf(Function);
      expect(Loop).to.have.property('removeRender').instanceOf(Function);
      expect(Loop).to.have.property('addPostRender').instanceOf(Function);
      expect(Loop).to.have.property('removePostRender').instanceOf(Function);
    });

    it('should add a function to a stage bucket', () => {
      var func = function(){};
      base.addProcess( func );
      base.process.bind( null, function( bucket ) {
        expect( bucket.length ).to.equal( 1 );
      });
    });

  it('should remove a function from a stage bucket', () => {
    var func = function(){};
    base.addProcess( func );
    base.removeProcess( func );
    base.process.bind( null, function( bucket ) {
      expect( bucket.length ).to.equal( 0 );
    });
  });

  it('should fail if trying to remove a function that it\'s not on the bucket', () => {
    var func = function(){};
    base.addProcess( func );
    expect( base.removeProcess.bind( null, function(){} ) ).to.throw( Error );
  });
});

describe('Loop: Implementation must work', () => {

  it('should have correct public methods', () => {
    expect(Loop).to.have.property('start').instanceOf(Function);
    expect(Loop).to.have.property('process').instanceOf(Function);
    expect(Loop).to.have.property('update').instanceOf(Function);
    expect(Loop).to.have.property('render').instanceOf(Function);
    expect(Loop).to.have.property('postRender').instanceOf(Function);
    expect(Loop).to.have.property('getFPS').instanceOf(Function);
    expect(Loop).to.have.property('setFPS').instanceOf(Function);
    expect(Loop).to.have.property('addProcess').instanceOf(Function);
    expect(Loop).to.have.property('removeProcess').instanceOf(Function);
    expect(Loop).to.have.property('addUpdate').instanceOf(Function);
    expect(Loop).to.have.property('removeUpdate').instanceOf(Function);
    expect(Loop).to.have.property('addRender').instanceOf(Function);
    expect(Loop).to.have.property('removeRender').instanceOf(Function);
    expect(Loop).to.have.property('addPostRender').instanceOf(Function);
    expect(Loop).to.have.property('removePostRender').instanceOf(Function);
  });

  it('should get the FPS', () => {
    expect(Loop.getFPS()).to.equal( 60 );
  });

  it('should set the FPS', () => {
    Loop.setFPS( 30 );
    expect(Loop.getFPS()).to.equal( 30 );
  });

  it('should go through the loop after start is executed', ( done ) => { //not working correctly
    var spy = true;
    var func = function(){
      expect(spy).to.equal( true );
    };

    var func2 = function(){
      check( done, function() {
        expect(spy).to.equal( true );
      });

    };

    Loop.addRender( func2 );
    Loop.addPostRender( func2 );
    Loop.start();
  });


});
