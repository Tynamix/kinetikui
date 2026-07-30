import { customElement } from "lit/decorators.js";
import { TabPanelBase } from "./tab-panel-base.js";
import { styles } from "./tab-panel.styles.js";

@customElement("kp-tab-panel")
export class KpTabPanel extends TabPanelBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-tab-panel": KpTabPanel;
  }
}
