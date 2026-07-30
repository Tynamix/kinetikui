import { customElement } from "lit/decorators.js";
import { PaginationBase } from "./pagination-base.js";
import { styles } from "./pagination.styles.js";

@customElement("kp-pagination")
export class KpPagination extends PaginationBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-pagination": KpPagination;
  }
}
