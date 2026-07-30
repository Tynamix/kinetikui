import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    width: 100%;
  }

  [part="line"] {
    flex: 1;
    height: var(--border-width);
    background: var(--color-border);
  }

  [part="label"] {
    display: inline-flex;
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xs);
    letter-spacing: var(--font-letter-spacing-wide);
    text-transform: uppercase;
    color: var(--color-text-muted);
    white-space: nowrap;
  }

  [part="label"][hidden] {
    display: none;
  }

  :host([orientation="vertical"]) {
    display: inline-flex;
    height: 100%;
  }

  :host([orientation="vertical"]) [part="base"] {
    flex-direction: column;
    width: auto;
    height: 100%;
  }

  :host([orientation="vertical"]) [part="line"] {
    width: var(--border-width);
    height: auto;
    flex: 1;
  }
`;
