import { customElement } from 'lit/decorators.js';
import { TextareaBase } from './textarea-base.js';
import { textareaStyles } from './textarea.styles.js';

@customElement('kp-textarea')
export class KpTextarea extends TextareaBase {
  static styles = [textareaStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'kp-textarea': KpTextarea;
  }
}