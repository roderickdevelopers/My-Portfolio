import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | studiocode', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:studiocode');
    assert.ok(route);
  });
});
