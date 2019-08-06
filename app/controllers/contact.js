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
      this.set('message', '')
      this.set('emailAddress', '')
    }
  }
});
