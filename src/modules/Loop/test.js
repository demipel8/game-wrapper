import babelPolyFill from '../../../node_modules/babel-polyfill/browser';
import facade from './facade';

let mock = {
  callback: () => {}
};

describe( 'Loop facade', () => {

  it( 'should have correct public methods', () => {

    expect(facade).to.have.property('initialize').instanceOf(Function);
    expect(facade).to.have.property('start').instanceOf(Function);
    expect(facade).to.have.property('getFPS').instanceOf(Function);
    expect(facade).to.have.property('setFPS').instanceOf(Function);
    expect(facade).to.have.property('addProcess').instanceOf(Function);
    expect(facade).to.have.property('removeProcess').instanceOf(Function);
    expect(facade).to.have.property('addUpdate').instanceOf(Function);
    expect(facade).to.have.property('removeUpdate').instanceOf(Function);
    expect(facade).to.have.property('addRender').instanceOf(Function);
    expect(facade).to.have.property('removeRender').instanceOf(Function);
    expect(facade).to.have.property('addPostRender').instanceOf(Function);
    expect(facade).to.have.property('removePostRender').instanceOf(Function);
  });

  it( 'start should start the loop', ( done ) => {
    mock.callback = function() {

      facade.stop();
      facade.removeProcess( mock.callback );
      done();
    };

    facade.addProcess( mock.callback );
    facade.start();
  });

  it('start should work in the established order', (done) => {
    let result = 0;
    let funcProccess = () => { result += 1 };
    let funcUpdate = () => { if ( result == 1 ) result += 10 };
    let funcRender = () => { if ( result == 11 ) result += 100 };
    let funcPostRender = () => {
      facade.removeProcess( funcProccess );
      facade.removeUpdate( funcUpdate );
      facade.removeRender( funcRender );
      facade.removePostRender( funcPostRender );
      facade.stop();

      if ( result == 111 ){
        done()
      } };

    facade.addProcess( funcProccess );
    facade.addUpdate( funcUpdate );
    facade.addRender( funcRender );
    facade.addPostRender( funcPostRender );

    facade.start();
  });

  it( 'stop should stop the loop', ( done ) => {
    mock.callback = function() {
      facade.stop();
      facade.removeProcess( mock.callback );

      mock.callback = function() {
        facade.stop();
        facade.removeProcess( mock.callback );
        done();
      };

      facade.addProcess( mock.callback );
      facade.start();
    };

    facade.addProcess( mock.callback );
    facade.start();
  });

  it( 'addProcess should add a function to process bucket', ( done ) => {

    mock.callback = function() {
      done();
      facade.stop();
    };

    facade.addProcess( mock.callback );

    facade.start();
  });

  it('should remove a function from a process bucket', () => {
    expect( facade.removeProcess( mock.callback ) ).to.deep.equal( mock.callback );
  });

  it('should fail removing a function that it\'s not on the process bucket', () => {
    expect( facade.removeProcess.bind( null, mock.callback ) ).to.throw( Error );
  });

  it('should add a function to update bucket', ( done ) => {

    mock.callback = function() {
      done();
      facade.stop();
    };

    facade.addUpdate( mock.callback );

    facade.start();
  });

  it('should remove a function from a update bucket', () => {
    expect( facade.removeUpdate( mock.callback ) ).to.deep.equal( mock.callback );
  });

  it('should fail removing a function that it\'s not on the update bucket', () => {
    expect( facade.removeUpdate.bind( null, mock.callback ) ).to.throw( Error );
  });

  it('should add a function to render bucket', ( done ) => {

    mock.callback = function() {
      done();
      facade.stop();
    };

    facade.addRender( mock.callback );

    facade.start();
  });

  it('should remove a function from a render bucket', () => {
    expect( facade.removeRender( mock.callback ) ).to.deep.equal( mock.callback );
  });

  it('should fail removing a function that it\'s not on the render bucket', () => {
    expect( facade.removeRender.bind( null, mock.callback ) ).to.throw( Error );
  });

  it('should add a function to post render bucket', ( done ) => {

    mock.callback = function() {
      done();
      facade.stop();
    };

    facade.addPostRender( mock.callback );

    facade.start();
  });

  it('should remove a function from post render bucket', () => {
    expect( facade.removePostRender( mock.callback ) ).to.deep.equal( mock.callback );
  });

  it('should fail removing a function that it\'s not on the post render bucket', () => {
    expect( facade.removePostRender.bind( null, mock.callback ) ).to.throw( Error );
  });

  it('getFPS should return a number', () => {
    facade.initialize();

    expect( facade.getFPS() ).to.be.a( 'number' );
  });

  it('setFPS should set the FPS', () => {
    let fps = 32;

    facade.initialize();
    facade.setFPS( fps );

    expect( facade.getFPS() ).to.equal( fps );
  });

});

