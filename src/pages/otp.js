/**
 * OTP login page component - provides reactive data for login-otp.html
 */
export function otpPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get otpError() {
      return this.ctx.messagesPerField?.totp || '';
    },
    
    get hasMultipleCredentials() {
      return this.ctx.otpLogin?.userOtpCredentials?.length > 1;
    }
  };
}
