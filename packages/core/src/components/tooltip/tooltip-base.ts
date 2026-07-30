import { LitElement, html } from "lit";
import { property, state, query } from "lit/decorators.js";

let tooltipIdCounter = 0;

export class TooltipBase extends LitElement {
  @property({ type: String }) content = "";
  @property({ type: String, reflect: true }) placement: "top" | "bottom" | "left" | "right" = "top";
  @property({ type: Number }) delay = 150;
  @property({ type: Boolean, reflect: true }) open = false;

  @state() private _x = 0;
  @state() private _y = 0;

  private _tooltipId = `kp-tooltip-${++tooltipIdCounter}`;
  private _showTimer?: ReturnType<typeof setTimeout>;

  @query('[part="trigger"]') triggerEl!: HTMLElement;
  @query('[part="tooltip"]') tooltipEl!: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this._handleReposition);
    window.addEventListener("scroll", this._handleReposition, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this._handleReposition);
    window.removeEventListener("scroll", this._handleReposition, true);
    clearTimeout(this._showTimer);
  }

  // Runs before the DOM re-renders, while the tooltip is still in its old
  // (closed, but measurable) layout — so the position is correct in the
  // very same frame the tooltip becomes visible, instead of snapping into
  // place a frame after a visible flash at (0, 0).
  protected willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("open") && this.open) {
      this._calculatePosition();
    }
  }

  private _handleReposition = () => {
    if (this.open) this._calculatePosition();
  };

  private _show = () => {
    clearTimeout(this._showTimer);
    this._showTimer = setTimeout(() => {
      this.open = true;
    }, this.delay);
  };

  private _hide = () => {
    clearTimeout(this._showTimer);
    this.open = false;
  };

  private _calculatePosition = () => {
    if (!this.triggerEl || !this.tooltipEl) return;

    const triggerRect = this.triggerEl.getBoundingClientRect();
    const tooltipRect = this.tooltipEl.getBoundingClientRect();
    const gap = 8;

    let top = 0;
    let left = 0;

    switch (this.placement) {
      case "top":
        top = triggerRect.top - tooltipRect.height - gap;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + gap;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "left":
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - gap;
        break;
      case "right":
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + gap;
        break;
    }

    // Clamp to the viewport so the tooltip never gets clipped off-screen.
    left = Math.max(4, Math.min(left, window.innerWidth - tooltipRect.width - 4));
    top = Math.max(4, Math.min(top, window.innerHeight - tooltipRect.height - 4));

    this._x = left;
    this._y = top;
  };

  protected render() {
    return html`
      <span
        part="trigger"
        aria-describedby=${this._tooltipId}
        @mouseenter=${this._show}
        @mouseleave=${this._hide}
        @focusin=${this._show}
        @focusout=${this._hide}
      >
        <slot></slot>
      </span>

      <span
        id=${this._tooltipId}
        part="tooltip"
        role="tooltip"
        aria-hidden=${!this.open ? "true" : "false"}
        style="top: ${this._y}px; left: ${this._x}px;"
      >
        ${this.content}
      </span>
    `;
  }
}
