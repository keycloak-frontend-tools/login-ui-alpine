/**
 * Password field component with visibility toggle
 */
export function passwordFieldComponent() {
  return {
    showPassword: false,
    
    get inputType() {
      return this.showPassword ? 'text' : 'password';
    },
    
    get toggleIcon() {
      return this.showPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    },
    
    toggle() {
      this.showPassword = !this.showPassword;
    }
  };
}

/**
 * Password field HTML template
 */
export const passwordFieldTemplate = (name, label, options = {}) => `
  <div class="pf-v5-c-form__group" x-data="kcPasswordField">
    <div class="pf-v5-c-form__group-label">
      <label class="pf-v5-c-form__label" for="${name}">
        <span class="pf-v5-c-form__label-text">${label}</span>
        ${options.required ? '<span class="pf-v5-c-form__label-required" aria-hidden="true">*</span>' : ''}
      </label>
    </div>
    <div class="pf-v5-c-form__group-control">
      <div class="pf-v5-c-input-group">
        <div class="pf-v5-c-input-group__item pf-m-fill">
          <input
            class="pf-v5-c-form-control"
            :class="{ 'pf-m-error': ${options.errorVar || 'false'} }"
            :type="inputType"
            id="${name}"
            name="${name}"
            autocomplete="${options.autocomplete || 'current-password'}"
            ${options.autofocus ? 'autofocus' : ''}
            ${options.required ? 'required' : ''}
          />
        </div>
        <div class="pf-v5-c-input-group__item">
          <button
            type="button"
            class="pf-v5-c-button pf-m-control"
            @click="toggle"
            aria-label="Toggle password visibility"
          >
            <i :class="toggleIcon"></i>
          </button>
        </div>
      </div>
      ${options.errorVar ? `
      <template x-if="${options.errorVar}">
        <div class="pf-v5-c-form__helper-text pf-m-error">
          <span x-text="${options.errorVar}"></span>
        </div>
      </template>
      ` : ''}
      ${options.forgotPasswordUrl ? `
      <div class="pf-v5-c-form__helper-text">
        <a :href="${options.forgotPasswordUrl}" class="pf-v5-c-form__helper-text-link">
          <span x-text="$msg('doForgotPassword')"></span>
        </a>
      </div>
      ` : ''}
    </div>
  </div>
`;
