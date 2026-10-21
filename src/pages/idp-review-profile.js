/**
 * IDP review profile page component - provides reactive data for idp-review-user-profile.html
 */
export function idpReviewProfilePage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get emailError() {
      return this.ctx.messagesPerField?.email || '';
    },
    
    get firstNameError() {
      return this.ctx.messagesPerField?.firstName || '';
    },
    
    get lastNameError() {
      return this.ctx.messagesPerField?.lastName || '';
    },
    
    get usernameError() {
      return this.ctx.messagesPerField?.username || '';
    }
  };
}
