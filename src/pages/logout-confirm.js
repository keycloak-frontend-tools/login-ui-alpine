/**
 * Logout confirm page component - provides reactive data for logout-confirm.html
 */
export function logoutConfirmPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    }
  };
}
