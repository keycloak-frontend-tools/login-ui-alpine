/**
 * WebAuthn error page component - provides reactive data for webauthn-error.html
 */
export function webauthnErrorPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    }
  };
}
