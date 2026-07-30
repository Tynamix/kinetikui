import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class TabPanelBase extends LitElement {
  @property({ type: String, reflect: true }) value = "";
  @property({ type: Boolean, reflect: true }) active = false;

  protected render() {
    return html`
      <div part="base" role="tabpanel" ?hidden=${!this.active}>
        <slot></slot>
      </div>
    `;
  }
}
