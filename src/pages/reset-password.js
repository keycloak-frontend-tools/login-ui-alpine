/**
 * Reset password page component - provides reactive data for login-reset-password.html
 */
export function resetPasswordPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get usernameError() {
      return this.ctx.messagesPerField?.username || '';
    }
  };
}
