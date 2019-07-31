import Controller from '@ember/controller';
import { match, not} from '@ember/object/computed'

export default Controller.extend({
  headerMessage: `Coming Soon!`,
  emailAddress: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    saveInvitation() {
      alert(`saving the following email address: ${this.get('emailAddress')}`)
      this.set('responseMessage', `thank you we just saved your email ${this.get('emailAddress')}`)
      this.set('emailAddress', '')
    }
  }
});
