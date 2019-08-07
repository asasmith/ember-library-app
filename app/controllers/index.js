import Controller from '@ember/controller';
import { match, not} from '@ember/object/computed'

export default Controller.extend({
  headerMessage: `Coming Soon!`,
  emailAddress: '',
  responseMessage: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    saveInvitation() {
      // get email field value
      const email = this.get('emailAddress')

      // create store record
      const newInvitation = this.store.createRecord('invitation', { email })

      // method to save email address to firebase db
      newInvitation.save().then(response => {
        this.set('responseMessage', `Thank you we just saved your email (${email}) with this id: ${response.get('id')}`)
        this.set('emailAddress', '')
      })
    }
  }
});
