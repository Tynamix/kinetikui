import { customElement } from "lit/decorators.js";
import { RadioGroupBase } from "./radio-group-base.js";
import { styles } from "./radio-group.styles.js";

@customElement("kp-radio-group")
export class KpRadioGroup extends RadioGroupBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-radio-group": KpRadioGroup;
  }
}
