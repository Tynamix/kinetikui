import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="nav"] {
    display: flex;
    gap: var(--spacing-xs);
    border-bottom: var(--border-width) solid var(--color-border);
    overflow-x: auto;
  }

  [part="panels"] {
    padding-top: var(--spacing-md);
  }
`;
