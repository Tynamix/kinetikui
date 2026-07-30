import { LitElement, html, nothing } from "lit";
import { property, query } from "lit/decorators.js";

export class DialogBase extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) label = "Dialog";
  @property({ type: Boolean }) dismissible = true;

  @query('[part="panel"]') panelEl!: HTMLElement;

  private _previouslyFocused?: HTMLElement | null;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("keydown", this._handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this._handleKeydown);
    document.body.style.removeProperty("overflow");
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (!changedProperties.has("open")) return;

    if (this.open) {
      this._previouslyFocused = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => this.panelEl?.focus());
    } else if (changedProperties.get("open") !== undefined) {
      document.body.style.removeProperty("overflow");
      this._previouslyFocused?.focus?.();
    }
  }

  private _handleKeydown = (e: KeyboardEvent) => {
    if (this.open && e.key === "Escape" && this.dismissible) {
      this._close();
    }
  };

  private _close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent("kp-close", { bubbles: true, composed: true }));
  }

  private _handleBackdropClick = () => {
    if (this.dismissible) this._close();
  };

  protected render() {
    return html`
      <div part="backdrop" @click=${this._handleBackdropClick}></div>
      <div part="panel" role="dialog" aria-modal="true" aria-label=${this.label} tabindex="-1">
        <div part="header">
          <slot name="header"></slot>
          ${this.dismissible
            ? html`<button part="close" type="button" aria-label="Close dialog" @click=${this._close}>✕</button>`
            : nothing}
        </div>
        <div part="body">
          <slot></slot>
        </div>
        <div part="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
