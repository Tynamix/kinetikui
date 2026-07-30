import { css } from "lit";

export const styles = css`
  :host {
    display: inline-flex;
  }

  [part="base"] {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xs);
    letter-spacing: var(--font-letter-spacing-wide);
    text-transform: uppercase;
    padding: 0.25rem 0.6rem;
    line-height: 1;
    color: var(--color-text-main);
    background: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-small);
    box-shadow: 2px 2px 0px var(--color-border);
  }

  :host([variant="primary"]) [part="base"] {
    background: var(--accent-main);
    color: var(--color-surface);
  }

  :host([variant="success"]) [part="base"] {
    background: var(--color-success);
    color: var(--color-surface);
  }

  :host([variant="warning"]) [part="base"] {
    background: var(--color-warning);
    color: var(--color-border);
  }

  :host([variant="danger"]) [part="base"] {
    background: var(--color-danger);
    color: var(--color-surface);
  }
`;
