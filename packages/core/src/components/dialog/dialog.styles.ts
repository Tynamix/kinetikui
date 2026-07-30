import { css } from "lit";

export const styles = css`
  :host {
    display: contents;
  }

  [part="backdrop"] {
    position: fixed;
    inset: 0;
    background: rgba(17, 17, 17, 0.5);
    z-index: var(--z-index-popover, 100);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity var(--motion-fast) var(--motion-spring);
  }

  [part="panel"] {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: calc(var(--z-index-popover, 100) + 1);
    width: min(480px, calc(100vw - 2 * var(--spacing-lg)));
    max-height: calc(100vh - 2 * var(--spacing-xl));
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    background: var(--color-surface);
    color: var(--color-text-main);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-container);
    box-shadow: 8px 8px 0px var(--color-border);

    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translate(-50%, -50%) scale(0.94);
    transition: all var(--motion-fast) var(--motion-spring);
  }

  :host([open]) [part="backdrop"],
  :host([open]) [part="panel"] {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  :host([open]) [part="panel"] {
    transform: translate(-50%, -50%) scale(1);
  }

  [part="panel"]:focus-visible {
    outline: none;
  }

  [part="header"] {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--spacing-md);
    padding: var(--spacing-lg) var(--spacing-lg) 0;
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xl);
  }

  [part="close"] {
    appearance: none;
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--color-surface);
    color: var(--color-text-main);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-small);
    box-shadow: 2px 2px 0px var(--color-border);
    cursor: pointer;
    font-size: var(--font-size-sm);
    line-height: 1;
    transition: all var(--motion-fast) var(--motion-spring);
  }

  [part="close"]:hover {
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0px var(--accent-shift-1);
  }

  [part="close"]:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0px var(--color-border);
  }

  [part="body"] {
    padding: var(--spacing-lg);
    font-family: var(--font-family-body);
    line-height: var(--font-line-height-normal);
  }

  [part="footer"] {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing-sm);
    padding: 0 var(--spacing-lg) var(--spacing-lg);
  }
`;
