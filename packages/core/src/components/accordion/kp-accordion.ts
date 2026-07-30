import { customElement } from "lit/decorators.js";
import { AccordionBase } from "./accordion-base.js";
import { styles } from "./accordion.styles.js";

@customElement("kp-accordion")
export class KpAccordion extends AccordionBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-accordion": KpAccordion;
  }
}
