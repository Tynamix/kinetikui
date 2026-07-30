import { LitElement, html } from "lit";
import { property, query } from "lit/decorators.js";

export class TabsBase extends LitElement {
  @property({ type: String, reflect: true }) value = "";

  @query('slot[name="nav"]') navSlot!: HTMLSlotElement;
  @query('slot:not([name])') panelSlot!: HTMLSlotElement;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("kp-tab-select", this._handleTabSelect as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("kp-tab-select", this._handleTabSelect as EventListener);
  }

  firstUpdated() {
    this._syncTabs();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("value")) {
      this._syncTabs();
    }
  }

  private _getTabs() {
    if (!this.navSlot) return [];
    return this.navSlot.assignedElements({ flatten: true }).filter(
      (el) => el.tagName.toLowerCase() === "kp-tab"
    ) as any[];
  }

  private _getPanels() {
    if (!this.panelSlot) return [];
    return this.panelSlot.assignedElements({ flatten: true }).filter(
      (el) => el.tagName.toLowerCase() === "kp-tab-panel"
    ) as any[];
  }

  private _syncTabs = () => {
    const tabs = this._getTabs();

    // Default to the first tab if nothing is selected yet. Setting `value`
    // triggers `updated()`, which re-enters this method with it resolved.
    if (!this.value && tabs.length) {
      this.value = tabs[0].value;
      return;
    }

    tabs.forEach((tab) => {
      tab.active = tab.value === this.value;
    });

    this._getPanels().forEach((panel) => {
      panel.active = panel.value === this.value;
    });
  };

  private _handleTabSelect = (e: CustomEvent) => {
    this.value = e.detail.value;
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
        <div part="nav" role="tablist">
          <slot name="nav" @slotchange=${this._syncTabs}></slot>
        </div>
        <div part="panels">
          <slot @slotchange=${this._syncTabs}></slot>
        </div>
      </div>
    `;
  }
}
