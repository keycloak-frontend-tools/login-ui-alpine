/**
 * Verify email page component - provides reactive data for login-verify-email.html
 */
export function verifyEmailPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    }
  };
}
