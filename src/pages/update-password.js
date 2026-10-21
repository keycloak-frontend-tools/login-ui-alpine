/**
 * Update password page component - provides reactive data for login-update-password.html
 */
export function updatePasswordPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get passwordError() {
      return this.ctx.messagesPerField?.password || '';
    },
    
    get passwordNewError() {
      return this.ctx.messagesPerField?.['password-new'] || '';
    },
    
    get passwordConfirmError() {
      return this.ctx.messagesPerField?.['password-confirm'] || '';
    }
  };
}
