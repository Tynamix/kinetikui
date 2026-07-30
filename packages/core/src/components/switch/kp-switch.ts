import { customElement } from "lit/decorators.js";
import { SwitchBase } from "./switch-base.js";
import { styles } from "./switch.styles.js";

@customElement("kp-switch")
export class KpSwitch extends SwitchBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-switch": KpSwitch;
  }
}
