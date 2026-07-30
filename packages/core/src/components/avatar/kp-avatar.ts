import { customElement } from "lit/decorators.js";
import { AvatarBase } from "./avatar-base.js";
import { styles } from "./avatar.styles.js";

@customElement("kp-avatar")
export class KpAvatar extends AvatarBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-avatar": KpAvatar;
  }
}
