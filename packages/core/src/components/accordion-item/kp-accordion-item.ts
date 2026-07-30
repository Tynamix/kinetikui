import { customElement } from "lit/decorators.js";
import { AccordionItemBase } from "./accordion-item-base.js";
import { styles } from "./accordion-item.styles.js";

@customElement("kp-accordion-item")
export class KpAccordionItem extends AccordionItemBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-accordion-item": KpAccordionItem;
  }
}
