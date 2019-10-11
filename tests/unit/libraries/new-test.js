import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon'

const { spy } = sinon

module('Unit | Route | library/new', function(hooks) {
  setupTest(hooks)

  test('newLibrary action', function(assert) {
    const newLibrary = { save: spy() };

    const route = this.ownder.lookup('route:libraries/new')

    route.send('newLibrary')

    assert.ok(newLibrary.save.calledOnce)
  })
})
