import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class SpinnerBase extends LitElement {
  @property({ type: String, reflect: true }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) label = "Loading";

  protected render() {
    return html`
      <span part="base" role="status" aria-label=${this.label}>
        <span part="shape"></span>
      </span>
    `;
  }
}
