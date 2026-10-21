/**
 * Select authenticator page component - provides reactive data for select-authenticator.html
 */
export function selectAuthenticatorPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    }
  };
}
