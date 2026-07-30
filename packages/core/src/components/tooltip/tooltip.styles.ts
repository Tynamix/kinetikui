import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
  }

  [part="trigger"] {
    display: inline-block;
  }

  [part="tooltip"] {
    position: fixed;
    z-index: var(--z-index-popover, 100);
    max-width: 220px;
    background: var(--color-border);
    color: var(--color-surface);
    font-family: var(--font-family-body);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    padding: var(--spacing-xs) var(--spacing-sm);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-small);
    box-shadow: 3px 3px 0px var(--accent-shift-1);

    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(4px);
    /* top/left (the computed anchor position) must snap instantly, not
       animate — only the entrance itself should transition. */
    transition: opacity var(--motion-fast) var(--motion-spring),
      visibility var(--motion-fast) var(--motion-spring),
      transform var(--motion-fast) var(--motion-spring);
  }

  :host([open]) [part="tooltip"] {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
