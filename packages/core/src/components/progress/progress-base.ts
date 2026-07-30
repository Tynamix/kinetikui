import { LitElement, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

export class ProgressBase extends LitElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Boolean, reflect: true }) indeterminate = false;
  @property({ type: String }) label?: string;

  protected render() {
    const percent = Math.min(100, Math.max(0, (this.value / this.max) * 100));

    return html`
      <div part="base">
        ${this.label ? html`<div part="label">${this.label}</div>` : nothing}
        <div
          part="track"
          role="progressbar"
          aria-valuenow=${ifDefined(this.indeterminate ? undefined : this.value)}
          aria-valuemin="0"
          aria-valuemax=${this.max}
          aria-label=${this.label || "Progress"}
        >
          <div part="fill" style="width: ${this.indeterminate ? "40%" : percent + "%"}"></div>
        </div>
      </div>
    `;
  }
}
