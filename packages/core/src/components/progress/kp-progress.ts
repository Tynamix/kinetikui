import { customElement } from "lit/decorators.js";
import { ProgressBase } from "./progress-base.js";
import { styles } from "./progress.styles.js";

@customElement("kp-progress")
export class KpProgress extends ProgressBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-progress": KpProgress;
  }
}
