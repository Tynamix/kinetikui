import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
    width: 100%;
  }

  [part="base"] {
    display: block;
    width: 100%;
    height: 1rem;
    background: repeating-linear-gradient(
      45deg,
      var(--color-bg),
      var(--color-bg) 10px,
      var(--color-surface) 10px,
      var(--color-surface) 20px
    );
    border: var(--border-width) solid var(--color-border);
    animation: kp-skeleton-pulse 1.1s var(--motion-spring) infinite;
  }

  :host([variant="text"]) [part="base"] {
    height: 0.9em;
    border-radius: var(--radius-small);
  }

  :host([variant="circle"]) {
    width: 2.5rem;
  }

  :host([variant="circle"]) [part="base"] {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  :host([variant="rect"]) [part="base"] {
    height: 6rem;
    border-radius: var(--radius-small);
  }

  @keyframes kp-skeleton-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
