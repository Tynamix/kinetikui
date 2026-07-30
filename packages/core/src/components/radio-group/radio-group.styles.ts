import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  :host([orientation="horizontal"]) [part="base"] {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
  }

  :host([disabled]) {
    opacity: 0.6;
    pointer-events: none;
    cursor: not-allowed;
  }
`;
