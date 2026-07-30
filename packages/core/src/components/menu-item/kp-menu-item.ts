import { customElement } from "lit/decorators.js";
import { MenuItemBase } from "./menu-item-base.js";
import { styles } from "./menu-item.styles.js";

@customElement("kp-menu-item")
export class KpMenuItem extends MenuItemBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-menu-item": KpMenuItem;
  }
}
