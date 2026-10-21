/**
 * Keycloak Login UI - Alpine.js Theme
 * 
 * This module initializes Alpine.js and loads the Keycloak context.
 * With embeddedTemplates=true, the HTML templates are rendered server-side
 * by FreeMarker from the pages/*.html files.
 */

import Alpine from 'alpinejs';

// Import page components (just the data/logic, templates are in HTML files)
import { loginPage } from './pages/login.js';
import { loginUsernamePage } from './pages/login-username.js';
import { loginPasswordPage } from './pages/login-password.js';
import { registerPage } from './pages/register.js';
import { resetPasswordPage } from './pages/reset-password.js';
import { updatePasswordPage } from './pages/update-password.js';
import { updateProfilePage } from './pages/update-profile.js';
import { otpPage } from './pages/otp.js';
import { configTotpPage } from './pages/config-totp.js';
import { webauthnPage } from './pages/webauthn.js';
import { webauthnErrorPage } from './pages/webauthn-error.js';
import { errorPage } from './pages/error.js';
import { infoPage } from './pages/info.js';
import { logoutConfirmPage } from './pages/logout-confirm.js';
import { idpLinkConfirmPage } from './pages/idp-link-confirm.js';
import { idpLinkEmailPage } from './pages/idp-link-email.js';
import { verifyEmailPage } from './pages/verify-email.js';
import { pageExpiredPage } from './pages/page-expired.js';
import { oauthGrantPage } from './pages/oauth-grant.js';
import { selectAuthenticatorPage } from './pages/select-authenticator.js';
import { idpReviewProfilePage } from './pages/idp-review-profile.js';
import { recoveryCodesConfigPage } from './pages/recovery-codes-config.js';
import { recoveryCodesInputPage } from './pages/recovery-codes-input.js';
import { codePage } from './pages/code.js';

// Import shared components
import { layoutComponent } from './components/layout.js';
import { alertComponent } from './components/alert.js';
import { passwordFieldComponent } from './components/password-field.js';

/**
 * Get the Keycloak context from the embedded JSON script tag
 */
function getKeycloakContext() {
  const script = document.getElementById('kc-context');
  if (!script) {
    throw new Error('Keycloak context not found');
  }
  return JSON.parse(script.textContent || '{}');
}

/**
 * Initialize the Alpine.js application
 */
function initApp() {
  const ctx = getKeycloakContext();
  
  // Store context globally for all components
  Alpine.store('ctx', ctx);
  
  // Helper function for messages
  Alpine.magic('msg', () => (key, ...params) => {
    let message = ctx.msg[key] || key;
    params.forEach((param, index) => {
      message = message.replace(new RegExp(`\\{${index}\\}`, 'g'), String(param));
    });
    return message;
  });
  
  // Register shared components
  Alpine.data('kcLayout', layoutComponent);
  Alpine.data('kcAlert', alertComponent);
  Alpine.data('kcPasswordField', passwordFieldComponent);
  
  // Register page components - these provide the reactive data for each page
  Alpine.data('loginPage', loginPage);
  Alpine.data('loginUsernamePage', loginUsernamePage);
  Alpine.data('loginPasswordPage', loginPasswordPage);
  Alpine.data('registerPage', registerPage);
  Alpine.data('resetPasswordPage', resetPasswordPage);
  Alpine.data('updatePasswordPage', updatePasswordPage);
  Alpine.data('updateProfilePage', updateProfilePage);
  Alpine.data('otpPage', otpPage);
  Alpine.data('configTotpPage', configTotpPage);
  Alpine.data('webauthnPage', webauthnPage);
  Alpine.data('webauthnErrorPage', webauthnErrorPage);
  Alpine.data('errorPage', errorPage);
  Alpine.data('infoPage', infoPage);
  Alpine.data('logoutConfirmPage', logoutConfirmPage);
  Alpine.data('idpLinkConfirmPage', idpLinkConfirmPage);
  Alpine.data('idpLinkEmailPage', idpLinkEmailPage);
  Alpine.data('verifyEmailPage', verifyEmailPage);
  Alpine.data('pageExpiredPage', pageExpiredPage);
  Alpine.data('oauthGrantPage', oauthGrantPage);
  Alpine.data('selectAuthenticatorPage', selectAuthenticatorPage);
  Alpine.data('idpReviewProfilePage', idpReviewProfilePage);
  Alpine.data('recoveryCodesConfigPage', recoveryCodesConfigPage);
  Alpine.data('recoveryCodesInputPage', recoveryCodesInputPage);
  Alpine.data('codePage', codePage);
  
  // Start Alpine - it will process the DOM that was rendered server-side
  Alpine.start();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
