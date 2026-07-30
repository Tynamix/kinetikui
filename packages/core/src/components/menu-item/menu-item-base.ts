import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class MenuItemBase extends LitElement {
  @property({ type: String, reflect: true }) value = "";
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) variant: "default" | "danger" = "default";

  protected render() {
    return html`
      <div
        part="base"
        role="menuitem"
        aria-disabled=${this.disabled ? "true" : "false"}
        @click=${this._handleSelect}
      >
        <slot name="icon"></slot>
        <span part="label"><slot></slot></span>
      </div>
    `;
  }

  private _handleSelect(e: Event) {
    if (this.disabled) {
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(
      new CustomEvent("kp-menu-item-select", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }
}
