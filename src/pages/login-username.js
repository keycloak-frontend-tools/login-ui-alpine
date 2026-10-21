/**
 * Login username page component (first step of two-step login)
 * Provides reactive data for login-username.html
 */
export function loginUsernamePage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get usernameLabel() {
      if (!this.ctx.realm.loginWithEmailAllowed) {
        return this.$msg('username');
      }
      if (!this.ctx.realm.registrationEmailAsUsername) {
        return this.$msg('usernameOrEmail');
      }
      return this.$msg('email');
    },
    
    get usernameError() {
      return this.ctx.messagesPerField?.username || '';
    },
    
    get showRegisterLink() {
      return this.ctx.realm.password && 
             this.ctx.realm.registrationAllowed;
    },
    
    get showSocialProviders() {
      return this.ctx.realm.password && 
             this.ctx.social?.providers?.length > 0;
    }
  };
}
