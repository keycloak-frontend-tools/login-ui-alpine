/**
 * Code display page component - provides reactive data for code.html
 */
export function codePage() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    copied: false,
    
    copyCode() {
      const code = this.ctx.code?.code || '';
      navigator.clipboard.writeText(code).then(() => {
        this.copied = true;
        setTimeout(() => { this.copied = false; }, 2000);
      });
    }
  };
}
