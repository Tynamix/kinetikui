import { customElement } from "lit/decorators.js";
import { DropdownMenuBase } from "./dropdown-menu-base.js";
import { styles } from "./dropdown-menu.styles.js";

@customElement("kp-dropdown-menu")
export class KpDropdownMenu extends DropdownMenuBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-dropdown-menu": KpDropdownMenu;
  }
}
