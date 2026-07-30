import { LitElement, html, nothing } from "lit";
import { property } from "lit/decorators.js";

export class AlertBase extends LitElement {
  @property({ type: String, reflect: true })
  variant: "info" | "success" | "warning" | "danger" = "info";

  @property({ type: Boolean }) dismissible = false;
  @property({ type: Boolean, reflect: true }) open = true;

  private _dismiss() {
    this.open = false;
    this.dispatchEvent(new CustomEvent("kp-dismiss", { bubbles: true, composed: true }));
  }

  private _renderDefaultIcon() {
    switch (this.variant) {
      case "success":
        return html`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter">
            <circle cx="12" cy="12" r="9"></circle>
            <polyline points="8 12 11 15 16 9"></polyline>
          </svg>
        `;
      case "warning":
        return html`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter">
            <path d="M12 3 L22 20 L2 20 Z"></path>
            <line x1="12" y1="10" x2="12" y2="15"></line>
            <circle cx="12" cy="17.5" r="0.6" fill="currentColor"></circle>
          </svg>
        `;
      case "danger":
        return html`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter">
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="12" y1="8" x2="12" y2="13"></line>
            <circle cx="12" cy="16" r="0.6" fill="currentColor"></circle>
          </svg>
        `;
      default:
        return html`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter">
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="12" y1="16" x2="12" y2="11"></line>
            <circle cx="12" cy="8" r="0.6" fill="currentColor"></circle>
          </svg>
        `;
    }
  }

  protected render() {
    if (!this.open) return nothing;

    return html`
      <div part="base" role="alert">
        <div part="icon">
          <slot name="icon"><kp-icon size="lg">${this._renderDefaultIcon()}</kp-icon></slot>
        </div>
        <div part="content">
          <slot></slot>
        </div>
        ${this.dismissible
          ? html`<button part="close" type="button" aria-label="Dismiss" @click=${this._dismiss}>✕</button>`
          : nothing}
      </div>
    `;
  }
}
