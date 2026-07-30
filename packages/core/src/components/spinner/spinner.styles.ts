import { css } from "lit";

export const styles = css`
  :host {
    display: inline-flex;
  }

  [part="base"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  [part="shape"] {
    display: block;
    box-sizing: border-box;
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-small);
    border-top-color: var(--accent-main);
    border-right-color: var(--accent-shift-1);
    animation: kp-spin 0.7s linear infinite;
  }

  :host([size="sm"]) [part="shape"] {
    width: 1rem;
    height: 1rem;
  }

  :host([size="md"]) [part="shape"] {
    width: 1.75rem;
    height: 1.75rem;
  }

  :host([size="lg"]) [part="shape"] {
    width: 2.5rem;
    height: 2.5rem;
  }

  @keyframes kp-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
