import { customElement } from "lit/decorators.js";
import { DialogBase } from "./dialog-base.js";
import { styles } from "./dialog.styles.js";

@customElement("kp-dialog")
export class KpDialog extends DialogBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-dialog": KpDialog;
  }
}
