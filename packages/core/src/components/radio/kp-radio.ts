import { customElement } from "lit/decorators.js";
import { RadioBase } from "./radio-base.js";
import { styles } from "./radio.styles.js";

@customElement("kp-radio")
export class KpRadio extends RadioBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-radio": KpRadio;
  }
}
