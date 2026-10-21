/**
 * Recovery codes configuration page component - provides reactive data for login-recovery-authn-code-config.html
 */
export function recoveryCodesConfigPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    copied: false,
    
    copyToClipboard() {
      const codes = this.ctx.recoveryAuthnCodesConfigBean?.generatedRecoveryAuthnCodesAsString || '';
      navigator.clipboard.writeText(codes).then(() => {
        this.copied = true;
        setTimeout(() => { this.copied = false; }, 2000);
      });
    }
  };
}
