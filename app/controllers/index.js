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
      this.set('responseMessage', `thank you we just saved your email ${this.get('emailAddress')}`)
      this.set('emailAddress', '')
    }
  }
});
