/**
 * Registration page component - provides reactive data for register.html
 */
export function registerPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get usernameError() {
      return this.ctx.messagesPerField?.username || '';
    },
    
    get emailError() {
      return this.ctx.messagesPerField?.email || '';
    },
    
    get firstNameError() {
      return this.ctx.messagesPerField?.firstName || '';
    },
    
    get lastNameError() {
      return this.ctx.messagesPerField?.lastName || '';
    },
    
    get passwordError() {
      return this.ctx.messagesPerField?.password || '';
    },
    
    get passwordConfirmError() {
      return this.ctx.messagesPerField?.['password-confirm'] || '';
    }
  };
}
