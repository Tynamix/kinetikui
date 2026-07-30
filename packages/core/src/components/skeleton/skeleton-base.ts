import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class SkeletonBase extends LitElement {
  @property({ type: String, reflect: true }) variant: "text" | "circle" | "rect" = "text";
  @property({ type: String }) width?: string;
  @property({ type: String }) height?: string;

  protected render() {
    const style = `${this.width ? `width: ${this.width};` : ""}${this.height ? `height: ${this.height};` : ""}`;

    return html`<span part="base" style=${style} aria-hidden="true"></span>`;
  }
}
