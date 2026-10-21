/**
 * OAuth grant page component - provides reactive data for login-oauth-grant.html
 */
export function oauthGrantPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    }
  };
}
