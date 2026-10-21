/**
 * Login password page component (second step of two-step login)
 * Provides reactive data for login-password.html
 */
export function loginPasswordPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get passwordError() {
      return this.ctx.messagesPerField?.password || '';
    }
  };
}
