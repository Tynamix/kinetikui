import { LitElement, html } from "lit";
import { property, state, query } from "lit/decorators.js";

export class DividerBase extends LitElement {
  @property({ type: String, reflect: true }) orientation: "horizontal" | "vertical" = "horizontal";

  @state() private _hasLabel = false;
  @query("slot") private _slot!: HTMLSlotElement;

  private _handleSlotChange = () => {
    this._hasLabel = this._slot
      .assignedNodes({ flatten: true })
      .some((node) => (node.textContent ?? "").trim().length > 0);
  };

  protected render() {
    return html`
      <div part="base" role="separator" aria-orientation=${this.orientation}>
        <span part="line"></span>
        <span part="label" ?hidden=${!this._hasLabel}>
          <slot @slotchange=${this._handleSlotChange}></slot>
        </span>
        <span part="line"></span>
      </div>
    `;
  }
}
