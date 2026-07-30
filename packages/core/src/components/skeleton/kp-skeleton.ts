import { customElement } from "lit/decorators.js";
import { SkeletonBase } from "./skeleton-base.js";
import { styles } from "./skeleton.styles.js";

@customElement("kp-skeleton")
export class KpSkeleton extends SkeletonBase {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-skeleton": KpSkeleton;
  }
}
