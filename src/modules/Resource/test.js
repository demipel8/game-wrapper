
import facade from './facade';

let mock = {
  data: { name: 'turuleta', url:' https://pata/to/a/url' },
  dataextra: { name: 'turuleta', url:' https://pata/to/a/url', extra: 'more things' }
};

describe ( 'Resource facade', () => {

  it( 'resource factory should return a resource with the required fields', () => {
    expect( facade( mock.data ) ).to.deep.equal( { name: mock.data.name, url: mock.data.url } );
  });

  it( 'resource factory should omit extra fields', () => {
    expect( facade( mock.dataextra ) ).to.deep.equal( { name: mock.dataextra.name, url: mock.dataextra.url } );
  });

  it( 'resource factory should fail if entry is empty', () => {
     expect( facade.bind( null, {} ) ).to.throw( Error );
  });

});
