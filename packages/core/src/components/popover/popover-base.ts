import { LitElement, html } from "lit";
import { property, state, query } from "lit/decorators.js";

export class PopoverBase extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) placement: "bottom-start" | "bottom-end" | "top-start" | "top-end" = "bottom-start";
  @property({ type: Boolean, attribute: "auto-position" }) autoPosition = true;

  @state() private _x = 0;
  @state() private _y = 0;

  @query('[part="trigger"]') triggerEl!: HTMLElement;
  @query('[part="popover"]') popoverEl!: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this._handleOutsideClick);
    window.addEventListener("resize", this._handleReposition);
    window.addEventListener("scroll", this._handleReposition, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._handleOutsideClick);
    window.removeEventListener("resize", this._handleReposition);
    window.removeEventListener("scroll", this._handleReposition, true);
  }

  firstUpdated() {
    if (this.open) this._calculatePosition();
  }

  // Runs before the DOM re-renders, while the popover is still in its old
  // (closed, but measurable) layout — so the position is correct in the
  // very same frame the popover becomes visible, instead of snapping into
  // place a tick after a visible flash at (0, 0).
  protected willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("open") && this.open) {
      this._calculatePosition();
    }
  }

  private _handleReposition = () => {
    if (this.open) this._calculatePosition();
  };

  private _toggle() {
    this.open = !this.open;
  }

  private _handleOutsideClick = (e: MouseEvent) => {
    if (!this.open) return;
    const path = e.composedPath();
    if (!path.includes(this)) {
      this.open = false;
    }
  };

  private _calculatePosition = () => {
    if (!this.open || !this.triggerEl || !this.popoverEl) return;

    const triggerRect = this.triggerEl.getBoundingClientRect();
    const popoverRect = this.popoverEl.getBoundingClientRect();

    let top = triggerRect.bottom + 8;
    let left = triggerRect.left;

    if (this.autoPosition) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (top + popoverRect.height > viewportHeight) {
        top = triggerRect.top - popoverRect.height - 8;
      }

      if (left + popoverRect.width > viewportWidth) {
        left = triggerRect.right - popoverRect.width;
      }
    }

    this._x = left;
    this._y = top;
  };

  protected render() {
    return html`
      <div 
        part="trigger" 
        @click=${this._toggle} 
        aria-haspopup="dialog" 
        aria-expanded=${this.open ? "true" : "false"}
      >
        <slot name="trigger"></slot>
      </div>
      
      <div
        part="popover"
        role="dialog"
        aria-hidden=${!this.open ? "true" : "false"}
        style="top: ${this._y}px; left: ${this._x}px;"
      >
        <slot></slot>
      </div>
    `;
  }
}