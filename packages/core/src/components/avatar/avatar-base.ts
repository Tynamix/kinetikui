import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";

export class AvatarBase extends LitElement {
  @property({ type: String }) src?: string;
  @property({ type: String }) alt = "";
  @property({ type: String }) initials?: string;
  @property({ type: String, reflect: true }) size: "sm" | "md" | "lg" | "xl" = "md";
  @property({ type: String, reflect: true }) shape: "circle" | "square" = "circle";

  @state() private _imageFailed = false;

  private _handleError() {
    this._imageFailed = true;
  }

  protected render() {
    const showImage = this.src && !this._imageFailed;

    return html`
      <span part="base" role="img" aria-label=${this.alt || this.initials || "avatar"}>
        ${showImage
          ? html`<img part="image" src=${this.src!} alt=${this.alt} @error=${this._handleError} />`
          : html`<span part="fallback">${this.initials || "?"}</span>`}
      </span>
    `;
  }
}
