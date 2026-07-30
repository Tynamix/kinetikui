import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class AccordionItemBase extends LitElement {
  @property({ type: String, reflect: true }) value = "";
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  private _handleHeaderClick() {
    if (this.disabled) return;
    this.dispatchEvent(
      new CustomEvent("kp-accordion-toggle", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render() {
    return html`
      <div part="base">
        <button
          part="header"
          type="button"
          aria-expanded=${this.open ? "true" : "false"}
          ?disabled=${this.disabled}
          @click=${this._handleHeaderClick}
        >
          <span part="title"><slot name="header"></slot></span>
          <span part="icon">▼</span>
        </button>
        <div part="content" ?inert=${!this.open}>
          <div part="content-inner">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
