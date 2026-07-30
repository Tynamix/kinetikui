import { customElement } from "lit/decorators.js";
import { DividerBase } from "./divider-base.js";
import { styles } from "./divider.styles.js";

@customElement("kp-divider")
export class KpDivider extends DividerBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-divider": KpDivider;
  }
}
