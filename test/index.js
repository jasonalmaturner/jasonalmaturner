import rp from 'request-promise';
import assert from 'assert';

import '../lib/server.js';

describe('First get', () => {
  it('should return \'it\'s working!\'', done => {
    rp('http://127.0.0.1:9001/api/test').then(res => {
      assert.equal('it\'s working!', res);
      done();
    });
  });
});
