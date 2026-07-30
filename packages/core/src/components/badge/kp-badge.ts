import { customElement } from "lit/decorators.js";
import { BadgeBase } from "./badge-base.js";
import { styles } from "./badge.styles.js";

@customElement("kp-badge")
export class KpBadge extends BadgeBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-badge": KpBadge;
  }
}
