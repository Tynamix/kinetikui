import { customElement } from "lit/decorators.js";
import { AlertBase } from "./alert-base.js";
import { styles } from "./alert.styles.js";

@customElement("kp-alert")
export class KpAlert extends AlertBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-alert": KpAlert;
  }
}
