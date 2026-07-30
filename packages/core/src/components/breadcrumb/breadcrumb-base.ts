import { LitElement, html } from "lit";
import { query } from "lit/decorators.js";

export class BreadcrumbBase extends LitElement {
  @query("slot") private _slot!: HTMLSlotElement;

  private _handleSlotChange = () => {
    const items = this._slot.assignedElements({ flatten: true });
    items.forEach((el, index) => {
      el.toggleAttribute("data-breadcrumb-last", index === items.length - 1);
    });
  };

  protected render() {
    return html`
      <nav part="base" aria-label="Breadcrumb">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </nav>
    `;
  }
}
