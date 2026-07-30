import { LitElement, html } from "lit";
import { property, query } from "lit/decorators.js";

export class AccordionBase extends LitElement {
  @property({ type: Boolean, reflect: true }) multiple = false;

  // Comma-separated list of open kp-accordion-item `value`s.
  @property({ type: String }) value = "";

  @query("slot") defaultSlot!: HTMLSlotElement;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("kp-accordion-toggle", this._handleToggle as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("kp-accordion-toggle", this._handleToggle as EventListener);
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("value")) {
      this._syncItems();
    }
  }

  private _getItems() {
    if (!this.defaultSlot) return [];
    return this.defaultSlot.assignedElements({ flatten: true }).filter(
      (el) => el.tagName.toLowerCase() === "kp-accordion-item"
    ) as any[];
  }

  private _openValues(): string[] {
    return this.value ? this.value.split(",").filter(Boolean) : [];
  }

  private _syncItems = () => {
    const openValues = this._openValues();
    this._getItems().forEach((item) => {
      item.open = openValues.includes(item.value);
    });
  };

  private _handleToggle = (e: CustomEvent) => {
    const targetValue = e.detail.value as string;
    let openValues = this._openValues();
    const isOpen = openValues.includes(targetValue);

    if (this.multiple) {
      openValues = isOpen
        ? openValues.filter((v) => v !== targetValue)
        : [...openValues, targetValue];
    } else {
      openValues = isOpen ? [] : [targetValue];
    }

    this.value = openValues.join(",");
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
      <div part="base">
        <slot @slotchange=${this._syncItems}></slot>
      </div>
    `;
  }
}
