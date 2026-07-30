import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-main);
    border-radius: var(--radius-small);
    cursor: pointer;
    transition: background var(--motion-fast) var(--motion-spring);
  }

  :host(:not([disabled])) [part="base"]:hover {
    background: var(--accent-shift-2);
  }

  :host([variant="danger"]) [part="base"] {
    color: var(--color-danger);
  }

  :host([variant="danger"]:not([disabled])) [part="base"]:hover {
    background: var(--color-danger);
    color: var(--color-surface);
  }

  :host([disabled]) [part="base"] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ::slotted([slot="icon"]) {
    display: inline-flex;
    flex-shrink: 0;
  }
`;
