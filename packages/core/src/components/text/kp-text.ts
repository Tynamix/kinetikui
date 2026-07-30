import { customElement } from 'lit/decorators.js';
import { TextBase } from './text-base.js';
import { styles } from './text.styles.js';

/**
 * KinetikUI Typography Component.
 * @element kp-text
 * * @example
 * <kp-text variant="heading-1" as="h1">Hello World</kp-text>
 * <kp-text variant="body-sm" color="muted">This is small muted text.</kp-text>
 */
@customElement('kp-text')
export class KpText extends TextBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'kp-text': KpText;
  }
}