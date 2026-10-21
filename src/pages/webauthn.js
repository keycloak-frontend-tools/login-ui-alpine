/**
 * WebAuthn authentication page component - provides reactive data for webauthn-authenticate.html
 */
export function webauthnPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    isAuthenticating: false,
    error: null,
    
    async authenticate() {
      this.isAuthenticating = true;
      this.error = null;
      
      // WebAuthn authentication is handled by the form submission
      const form = document.getElementById('webauthn-form');
      if (form) {
        form.submit();
      }
    }
  };
}
