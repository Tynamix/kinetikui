import { customElement } from "lit/decorators.js";
import { BreadcrumbBase } from "./breadcrumb-base.js";
import { styles } from "./breadcrumb.styles.js";

@customElement("kp-breadcrumb")
export class KpBreadcrumb extends BreadcrumbBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-breadcrumb": KpBreadcrumb;
  }
}
