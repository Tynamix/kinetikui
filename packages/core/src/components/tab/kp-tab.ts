import { customElement } from "lit/decorators.js";
import { TabBase } from "./tab-base.js";
import { styles } from "./tab.styles.js";

@customElement("kp-tab")
export class KpTab extends TabBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-tab": KpTab;
  }
}
