import { LitElement, html } from "lit";
import { query } from "lit/decorators.js";

export class DropdownMenuBase extends LitElement {
  @query("kp-popover") popoverEl!: any;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("kp-menu-item-select", this._handleItemSelect as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("kp-menu-item-select", this._handleItemSelect as EventListener);
  }

  private _handleItemSelect = (e: CustomEvent) => {
    if (this.popoverEl) this.popoverEl.open = false;
    this.dispatchEvent(
      new CustomEvent("kp-select", {
        detail: { value: e.detail.value },
        bubbles: true,
        composed: true,
      })
    );
  };

  protected render() {
    return html`
      <kp-popover>
        <div slot="trigger" part="trigger">
          <slot name="trigger"></slot>
        </div>
        <div part="menu" role="menu">
          <slot></slot>
        </div>
      </kp-popover>
    `;
  }
}
