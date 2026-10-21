/**
 * Error page component - provides reactive data for error.html
 */
export function errorPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    }
  };
}
