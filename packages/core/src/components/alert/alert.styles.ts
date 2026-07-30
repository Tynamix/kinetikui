import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-lg);
    background: var(--color-surface);
    color: var(--color-text-main);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-small);
    box-shadow: 4px 4px 0px var(--color-border);
    font-family: var(--font-family-body);
    font-size: var(--font-size-sm);
    line-height: var(--font-line-height-normal);
  }

  [part="icon"] {
    flex-shrink: 0;
    display: inline-flex;
    margin-top: 0.1em;
  }

  [part="content"] {
    flex: 1;
    min-width: 0;
  }

  ::slotted([slot="title"]) {
    display: block;
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-xs);
  }

  [part="close"] {
    appearance: none;
    flex-shrink: 0;
    background: none;
    border: none;
    color: currentColor;
    cursor: pointer;
    font-size: var(--font-size-sm);
    line-height: 1;
    padding: 0.2rem;
    opacity: 0.7;
    transition: opacity var(--motion-fast) var(--motion-spring);
  }

  [part="close"]:hover {
    opacity: 1;
  }

  :host([variant="info"]) [part="base"] {
    background: color-mix(in srgb, var(--accent-main) 12%, var(--color-surface));
    border-color: var(--accent-main);
  }

  :host([variant="info"]) [part="icon"] {
    color: var(--accent-main);
  }

  :host([variant="success"]) [part="base"] {
    background: color-mix(in srgb, var(--color-success) 14%, var(--color-surface));
    border-color: var(--color-success);
  }

  :host([variant="success"]) [part="icon"] {
    color: var(--color-success);
  }

  :host([variant="warning"]) [part="base"] {
    background: color-mix(in srgb, var(--color-warning) 16%, var(--color-surface));
    border-color: var(--color-warning);
  }

  :host([variant="warning"]) [part="icon"] {
    color: var(--color-warning);
  }

  :host([variant="danger"]) [part="base"] {
    background: color-mix(in srgb, var(--color-danger) 12%, var(--color-surface));
    border-color: var(--color-danger);
  }

  :host([variant="danger"]) [part="icon"] {
    color: var(--color-danger);
  }
`;
