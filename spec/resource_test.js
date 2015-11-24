/**
 * Created by demi on 11/24/15.
 */
import base from '../src/js/interfaces/I_Resource';
import Resource from '../src/js/modules/M_Resource';

describe ( 'Interface has the required properties', function() {

  it('should have name property', () => {
    expect(base).to.have.property('name');
  });

  it('should have url property', () => {
    expect(base).to.have.property('url');
  });

});

describe ( 'Implementation behaves as expected', function() {

  it('should fail if data is null', () => {
    expect(Resource.bind(null, {})).to.throw( Error );
  });

  it('should fail name is missing', () => {
    expect(Resource.bind(null, { url: ''})).to.throw( Error );
  });

  it('should fail url is missing', () => {
    expect(Resource.bind(null, { name: ''})).to.throw( Error );
  });

  it('should success if name and url are present', () => {
    let resource = {
      name: 'tobias',
      url: 'tu/path/a/tobias'
    };
    expect(Resource( resource )).to.deep.equal( resource );
  });

  it('should work wiht extra parameters', () => {
    let resource = {
      name: 'tobias',
      url: 'tu/path/a/tobias'
    };

    let resourcePlus = {
      name: 'tobias',
      url: 'tu/path/a/tobias',
      type: 'image/cool',
      cached: false
    };
    expect(Resource( resourcePlus )).to.deep.equal( resource );
  });

});
