/**
 * Info page component - provides reactive data for info.html
 */
export function infoPage() {
  return {
    get ctx() {
      return this.$store.ctx;
    }
  };
}
