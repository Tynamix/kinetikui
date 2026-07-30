import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
  }

  [part="base"] {
    appearance: none;
    background: none;
    cursor: pointer;
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    padding: var(--spacing-sm) var(--spacing-md);
    border: var(--border-width) solid transparent;
    border-radius: var(--radius-small);
    transition: all var(--motion-fast) var(--motion-spring);
  }

  [part="base"]:hover:not(:disabled) {
    color: var(--color-text-main);
    transform: translate(-1px, -1px);
  }

  :host([active]) [part="base"] {
    color: var(--color-text-main);
    background: var(--color-surface);
    border-color: var(--color-border);
    box-shadow: 3px 3px 0px var(--color-border);
  }

  [part="base"]:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part="base"]:focus-visible {
    outline: var(--border-focus-width) solid var(--color-focus);
    outline-offset: 2px;
  }
`;
