/**
 * Created by demi on 11/24/15.
 */
// require all `test/components/**/test.js`
import babelPolyFill from 'babel-polyfill/browser'
const testsContext = require.context('./src/modules/', true, /test\.js$/);

testsContext.keys().forEach(testsContext);

