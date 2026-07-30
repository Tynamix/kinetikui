import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class BadgeBase extends LitElement {
  @property({ type: String, reflect: true })
  variant: "neutral" | "primary" | "success" | "warning" | "danger" = "neutral";

  protected render() {
    return html`
      <span part="base">
        <slot></slot>
      </span>
    `;
  }
}
