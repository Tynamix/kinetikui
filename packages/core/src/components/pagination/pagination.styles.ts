import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    flex-wrap: wrap;
  }

  [part="control"],
  [part="page"] {
    appearance: none;
    min-width: 2.25rem;
    height: 2.25rem;
    padding: 0 var(--spacing-xs);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-sm);
    color: var(--color-text-main);
    background: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-small);
    box-shadow: 3px 3px 0px var(--color-border);
    cursor: pointer;
    transition: all var(--motion-fast) var(--motion-spring);
  }

  [part="control"]:hover:not(:disabled),
  [part="page"]:hover:not([aria-current="page"]) {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px var(--accent-shift-1);
  }

  [part="control"]:active:not(:disabled),
  [part="page"]:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0px var(--color-border);
  }

  [part="control"]:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: 2px 2px 0px var(--color-border);
    transform: translate(1px, 1px);
  }

  [part="page"][aria-current="page"] {
    background: var(--accent-main);
    color: var(--color-surface);
  }

  [part="ellipsis"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.25rem;
    height: 2.25rem;
    color: var(--color-text-muted);
    font-weight: var(--font-weight-bold);
  }
`;
