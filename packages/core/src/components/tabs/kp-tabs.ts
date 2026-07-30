import { customElement } from "lit/decorators.js";
import { TabsBase } from "./tabs-base.js";
import { styles } from "./tabs.styles.js";

@customElement("kp-tabs")
export class KpTabs extends TabsBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-tabs": KpTabs;
  }
}
