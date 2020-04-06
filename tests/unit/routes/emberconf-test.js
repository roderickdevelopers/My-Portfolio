import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | emberconf', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:emberconf');
    assert.ok(route);
  });
});
