import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    background: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-small);
    box-shadow: 3px 3px 0px var(--color-border);
    overflow: hidden;
  }

  [part="header"] {
    appearance: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-sm);
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-md) var(--spacing-lg);
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-base);
    color: var(--color-text-main);
    text-align: left;
  }

  [part="header"]:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part="header"]:focus-visible {
    outline: var(--border-focus-width) solid var(--color-focus);
    outline-offset: -3px;
  }

  [part="icon"] {
    flex-shrink: 0;
    font-size: 0.7em;
    transition: transform var(--motion-fast) var(--motion-spring);
  }

  :host([open]) [part="icon"] {
    transform: rotate(180deg);
  }

  [part="content"] {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows var(--motion-fast) var(--motion-spring);
  }

  :host([open]) [part="content"] {
    grid-template-rows: 1fr;
  }

  [part="content-inner"] {
    overflow: hidden;
    padding: 0 var(--spacing-lg);
    font-family: var(--font-family-body);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: var(--font-line-height-normal);
    transition: padding var(--motion-fast) var(--motion-spring);
  }

  :host([open]) [part="content-inner"] {
    padding: 0 var(--spacing-lg) var(--spacing-lg);
  }
`;
