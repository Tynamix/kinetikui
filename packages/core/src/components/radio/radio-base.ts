import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class RadioBase extends LitElement {
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) name?: string;
  @property({ type: String }) value = "on";

  private _handleChange(e: Event) {
    if (this.disabled) return;

    const target = e.target as HTMLInputElement;
    this.checked = target.checked;

    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: { checked: this.checked, value: this.value },
      })
    );
  }

  protected render() {
    return html`
      <label part="base" ?aria-disabled=${this.disabled}>
        <input
          type="radio"
          part="input"
          .name=${this.name}
          .value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        />

        <div part="control"></div>

        <div part="label-container">
          <slot></slot>
        </div>
      </label>
    `;
  }
}
