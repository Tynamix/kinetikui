import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class TabBase extends LitElement {
  @property({ type: String, reflect: true }) value = "";
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  protected render() {
    return html`
      <button
        part="base"
        type="button"
        role="tab"
        aria-selected=${this.active ? "true" : "false"}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.active ? "0" : "-1"}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick() {
    if (this.disabled) return;
    this.dispatchEvent(
      new CustomEvent("kp-tab-select", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }
}
