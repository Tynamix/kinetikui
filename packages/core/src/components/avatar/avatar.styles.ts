import { css } from "lit";

export const styles = css`
  :host {
    display: inline-flex;
    flex-shrink: 0;
  }

  [part="base"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--accent-shift-2);
    color: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    box-shadow: 3px 3px 0px var(--color-border);
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    user-select: none;
  }

  [part="image"] {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  [part="fallback"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-transform: uppercase;
  }

  :host([shape="circle"]) [part="base"] {
    border-radius: 50%;
  }

  :host([shape="square"]) [part="base"] {
    border-radius: var(--radius-small);
  }

  :host([size="sm"]) [part="base"] {
    width: 2rem;
    height: 2rem;
    font-size: var(--font-size-xs);
  }

  :host([size="md"]) [part="base"] {
    width: 2.75rem;
    height: 2.75rem;
    font-size: var(--font-size-sm);
  }

  :host([size="lg"]) [part="base"] {
    width: 3.5rem;
    height: 3.5rem;
    font-size: var(--font-size-lg);
  }

  :host([size="xl"]) [part="base"] {
    width: 4.5rem;
    height: 4.5rem;
    font-size: var(--font-size-2xl);
  }
`;
