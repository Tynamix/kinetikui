import { customElement } from "lit/decorators.js";
import { SpinnerBase } from "./spinner-base.js";
import { styles } from "./spinner.styles.js";

@customElement("kp-spinner")
export class KpSpinner extends SpinnerBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-spinner": KpSpinner;
  }
}
