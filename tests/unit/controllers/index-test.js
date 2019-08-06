import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | index', function(hooks) {
  setupTest(hooks);

  // testing the saveInvitation action
  test('submit email function', function (assert) {
    const controller = this.owner.lookup('controller:index')
    const email = `test@test.test`

    controller.set('emailAddress', email)
    controller.send('saveInvitation')

    assert.equal(controller.get('emailAddress'), '')
    assert.equal(controller.get('responseMessage'), `thank you we just saved your email ${email}`)
  })
});
