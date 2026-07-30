import '@kinetik/design-tokens/dist/global.css';

import '@kinetik/core/src/components/button/kp-button.ts';
import '@kinetik/core/src/components/text/kp-text.ts';
import '@kinetik/core/src/components/input/kp-input.ts';
import '@kinetik/core/src/components/textarea/kp-textarea.ts';
import '@kinetik/core/src/components/card/kp-card.ts';
import '@kinetik/core/src/components/icon/kp-icon.ts';
import '@kinetik/core/src/components/checkbox/kp-checkbox.ts';
import '@kinetik/core/src/components/popover/kp-popover.ts';
import '@kinetik/core/src/components/select/kp-select.ts';
import '@kinetik/core/src/components/option/kp-option.ts';

import '@kinetik/core/src/components/radio/kp-radio.ts';
import '@kinetik/core/src/components/radio-group/kp-radio-group.ts';
import '@kinetik/core/src/components/switch/kp-switch.ts';
import '@kinetik/core/src/components/badge/kp-badge.ts';
import '@kinetik/core/src/components/avatar/kp-avatar.ts';
import '@kinetik/core/src/components/tabs/kp-tabs.ts';
import '@kinetik/core/src/components/tab/kp-tab.ts';
import '@kinetik/core/src/components/tab-panel/kp-tab-panel.ts';
import '@kinetik/core/src/components/tooltip/kp-tooltip.ts';
import '@kinetik/core/src/components/dialog/kp-dialog.ts';
import '@kinetik/core/src/components/alert/kp-alert.ts';
import '@kinetik/core/src/components/progress/kp-progress.ts';
import '@kinetik/core/src/components/spinner/kp-spinner.ts';
import '@kinetik/core/src/components/divider/kp-divider.ts';
import '@kinetik/core/src/components/accordion/kp-accordion.ts';
import '@kinetik/core/src/components/accordion-item/kp-accordion-item.ts';
import '@kinetik/core/src/components/breadcrumb/kp-breadcrumb.ts';
import '@kinetik/core/src/components/pagination/kp-pagination.ts';
import '@kinetik/core/src/components/skeleton/kp-skeleton.ts';
import '@kinetik/core/src/components/dropdown-menu/kp-dropdown-menu.ts';
import '@kinetik/core/src/components/menu-item/kp-menu-item.ts';

import './style.css';

// Wire up the demos that need a bit of imperative glue beyond what the
// components manage internally (dialog open/close, a live progress value).
window.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector('#demo-dialog');
  const openDialogBtn = document.querySelector('#open-dialog-btn');
  const cancelDialogBtn = document.querySelector('#cancel-dialog-btn');

  openDialogBtn?.addEventListener('click', () => {
    (dialog as any).open = true;
  });
  cancelDialogBtn?.addEventListener('click', () => {
    (dialog as any).open = false;
  });

  const progress = document.querySelector('#demo-progress') as any;
  if (progress) {
    let value = progress.value ?? 0;
    setInterval(() => {
      value = (value + 7) % 100;
      progress.value = value;
    }, 900);
  }
});
