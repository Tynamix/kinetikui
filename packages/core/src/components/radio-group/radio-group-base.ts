import { LitElement, html } from "lit";
import { property, query } from "lit/decorators.js";

export class RadioGroupBase extends LitElement {
  @property({ type: String, reflect: true }) value = "";
  @property({ type: String }) name = "kp-radio-group";
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) orientation: "horizontal" | "vertical" = "vertical";
  @property({ type: String }) label?: string;

  @query('slot') defaultSlot!: HTMLSlotElement;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", this._handleChildChange as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", this._handleChildChange as EventListener);
  }

  firstUpdated() {
    this._syncChildren();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (
      changedProperties.has("value") ||
      changedProperties.has("disabled") ||
      changedProperties.has("name")
    ) {
      this._syncChildren();
    }
  }

  private _getRadios() {
    if (!this.defaultSlot) return [];
    return this.defaultSlot.assignedElements({ flatten: true }).filter(
      (el) => el.tagName.toLowerCase() === "kp-radio"
    ) as any[];
  }

  private _syncChildren = () => {
    this._getRadios().forEach((radio) => {
      radio.name = this.name;
      if (this.disabled) radio.disabled = true;
      radio.checked = radio.value === this.value;
    });
  };

  private _handleChildChange = (e: Event) => {
    const target = e.target as any;
    if (target?.tagName?.toLowerCase() !== "kp-radio") return;
    this.value = target.value;
    this._syncChildren();
    this.dispatchEvent(
      new CustomEvent("kp-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  };

  protected render() {
    return html`
      <div part="base" role="radiogroup" aria-label=${this.label || "radio group"}>
        <slot @slotchange=${this._syncChildren}></slot>
      </div>
    `;
  }
}
