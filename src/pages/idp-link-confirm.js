/**
 * IDP link confirm page component - provides reactive data for login-idp-link-confirm.html
 */
export function idpLinkConfirmPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    }
  };
}
