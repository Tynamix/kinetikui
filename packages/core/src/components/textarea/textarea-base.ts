import { LitElement, html, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both' | 'auto';

export class TextareaBase extends LitElement {
  @property({ type: String }) label?: string;
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) name = '';
  @property({ type: Number }) rows = 3;

  // If a string is provided, the textarea enters an error state and displays the message
  @property({ type: String, reflect: true }) error?: string;

  @property({ type: String, reflect: true }) resize: TextareaResize = 'auto';
  @query('textarea') _textarea!: HTMLTextAreaElement;

  protected handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;

    if (this.resize === 'auto') {
      this.autoResize();
    }

    this.dispatchEvent(new CustomEvent('input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }));
  }

  protected autoResize() {
    if (this._textarea) {
      this._textarea.style.height = 'auto';
      this._textarea.style.height = `${this._textarea.scrollHeight}px`;
    }
  }

  firstUpdated() {
    if (this.resize === 'auto') {
      this.autoResize();
    }
  }

  render() {
    const textareaId = 'kp-internal-textarea';
    const errorId = 'kp-internal-error';

    return html`
      <div part="base" class="textarea-wrapper ${this.error ? 'has-error' : ''}">
        ${this.label ? html`
          <label part="label" for="${textareaId}">${this.label}</label>
        ` : nothing}

        <textarea
          part="input"
          id="${textareaId}"
          name="${this.name}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          rows="${this.rows}"
          aria-label="${ifDefined(this.label ? undefined : this.name || 'textarea')}"
          aria-invalid="${this.error ? 'true' : 'false'}"
          aria-describedby="${ifDefined(this.error ? errorId : undefined)}"
          @input="${this.handleInput}"
        ></textarea>

        ${this.error ? html`
          <div id="${errorId}" part="error-message" class="error-message" role="alert">
            ${this.error}
          </div>
        ` : nothing}
      </div>
    `;
  }
}
