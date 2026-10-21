/**
 * Configure TOTP page component - provides reactive data for login-config-totp.html
 */
export function configTotpPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get totpError() {
      return this.ctx.messagesPerField?.totp || '';
    },
    
    get userLabelError() {
      return this.ctx.messagesPerField?.userLabel || '';
    },
    
    showManual: false,
    
    toggleManual() {
      this.showManual = !this.showManual;
    }
  };
}
