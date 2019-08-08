import Controller from '@ember/controller';
import { match, gte, and, not } from '@ember/object/computed'

export default Controller.extend({
  message: '',
  emailAddress: '',
  messageIsValid: gte('message.length', 5),
  emailIsValid: match('emailAddress', /^.+@.+\..+$/),
  formIsValid: and('messageIsValid', 'emailIsValid'),
  isDisabled: not('formIsValid'),

  actions: {

    submitForm() {
      const email = this.emailAddress
      const message = this.message
      const newContact = this.store.createRecord('contact', {email, message})

      newContact.save().then(() => {
        this.set('message', '')
        this.set('emailAddress', '')
      })
    }
  }
});
