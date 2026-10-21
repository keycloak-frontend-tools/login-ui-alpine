/**
 * Layout component - provides the common login page structure
 */
export function layoutComponent() {
  return {
    get ctx() {
      return this.$store.ctx;
    },
    
    get showLocaleSelector() {
      return this.ctx.realm.internationalizationEnabled && 
             this.ctx.localeInfo?.supported?.length > 1;
    },
    
    get showTryAnotherWay() {
      return this.ctx.auth?.showTryAnotherWayLink;
    },
    
    get realmDisplayName() {
      return this.ctx.realm.displayNameHtml || this.ctx.realm.displayName || this.ctx.realm.name;
    }
  };
}

/**
 * Layout HTML template
 */
export const layoutTemplate = (content, options = {}) => `
  <div class="pf-v5-c-login">
    <div class="pf-v5-c-login__container">
      <header class="pf-v5-c-login__header">
        <template x-if="showLocaleSelector">
          <div class="pf-v5-c-login__header-locale">
            <select 
              class="pf-v5-c-form-control"
              @change="window.location.href = $event.target.value"
            >
              <template x-for="locale in ctx.localeInfo.supported" :key="locale.languageTag">
                <option 
                  :value="locale.url" 
                  :selected="locale.languageTag === ctx.localeInfo.currentLanguageTag"
                  x-text="locale.label"
                ></option>
              </template>
            </select>
          </div>
        </template>
      </header>
      
      <main class="pf-v5-c-login__main">
        <header class="pf-v5-c-login__main-header">
          <h1 class="pf-v5-c-title pf-m-3xl" x-text="pageTitle || ''"></h1>
          ${options.showUsername ? `
          <template x-if="ctx.auth?.showUsername">
            <div class="pf-v5-c-login__main-header-desc">
              <span x-text="ctx.auth.attemptedUsername"></span>
              <a :href="ctx.url.loginRestartFlowUrl" class="pf-v5-c-button pf-m-link pf-m-inline">
                <span class="pf-v5-c-button__icon">
                  <i class="fas fa-redo"></i>
                </span>
              </a>
            </div>
          </template>
          ` : ''}
        </header>
        
        <div class="pf-v5-c-login__main-body">
          <template x-if="ctx.message && ctx.message.summary">
            <div x-data="kcAlert">
              <div 
                class="pf-v5-c-alert pf-m-inline"
                :class="alertClass"
                role="alert"
              >
                <div class="pf-v5-c-alert__icon">
                  <i :class="iconClass"></i>
                </div>
                <p class="pf-v5-c-alert__title" x-html="ctx.message.summary"></p>
              </div>
            </div>
          </template>
          
          ${content}
        </div>
        
        <footer class="pf-v5-c-login__main-footer">
          ${options.showTryAnotherWay ? `
          <template x-if="showTryAnotherWay">
            <form :action="ctx.url.loginAction" method="post">
              <input type="hidden" name="tryAnotherWay" value="on" />
              <button type="submit" class="pf-v5-c-button pf-m-link">
                <span x-text="$msg('doTryAnotherWay')"></span>
              </button>
            </form>
          </template>
          ` : ''}
        </footer>
      </main>
      
      <footer class="pf-v5-c-login__footer">
        <p x-html="realmDisplayName"></p>
      </footer>
    </div>
  </div>
`;
