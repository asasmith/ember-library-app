import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | contact', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  // test('it exists', function(assert) {
  //   let controller = this.owner.lookup('controller:contact');
  //   assert.ok(controller);
  // });

  test('submit form function', function (assert) {
    let controller = this.owner.lookup('controller:contact');
    controller.set('message', 'test message')
    controller.set('emailAddress', 'test@test.test')
    controller.send('submitForm')

    assert.equal(controller.get('message'), '')
    assert.equal(controller.get('emailAddress'), '')
  })
});
