/**
 * Recovery codes input page component - provides reactive data for login-recovery-authn-code-input.html
 */
export function recoveryCodesInputPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get recoveryCodeError() {
      return this.ctx.messagesPerField?.recoveryCodeInput || '';
    },
    
    get codeNumber() {
      return this.ctx.recoveryAuthnCodesInputBean?.codeNumber || 1;
    }
  };
}
