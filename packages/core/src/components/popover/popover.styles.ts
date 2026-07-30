import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
    width: fit-content;
  }

  [part="trigger"] {
    display: inline-block;
    cursor: pointer;
  }

  [part="popover"] {
    position: fixed;
    z-index: var(--z-index-popover, 100);
    background: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-container);
    box-shadow: 4px 4px 0px var(--color-border);
    padding: var(--spacing-md);
    font-family: var(--font-family-body);
    color: var(--color-text-main);
    
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-8px);
    /* top/left (the computed anchor position) must snap instantly, not
       animate — only the entrance itself should transition. */
    transition: opacity var(--motion-fast) var(--motion-spring),
      visibility var(--motion-fast) var(--motion-spring),
      transform var(--motion-fast) var(--motion-spring);
  }


  :host([open]) [part="popover"] {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
  }
`;