/**
 * Page expired page component - provides reactive data for login-page-expired.html
 */
export function pageExpiredPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    }
  };
}
