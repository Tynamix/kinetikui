import { customElement } from "lit/decorators.js";
import { TooltipBase } from "./tooltip-base.js";
import { styles } from "./tooltip.styles.js";

@customElement("kp-tooltip")
export class KpTooltip extends TooltipBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-tooltip": KpTooltip;
  }
}
