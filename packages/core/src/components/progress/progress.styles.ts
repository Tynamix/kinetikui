import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    width: 100%;
  }

  [part="base"] {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    width: 100%;
  }

  [part="label"] {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-sm);
    color: var(--color-text-main);
  }

  [part="track"] {
    position: relative;
    width: 100%;
    height: 1rem;
    overflow: hidden;
    background: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-small);
    box-shadow: 3px 3px 0px var(--color-border);
  }

  [part="fill"] {
    height: 100%;
    background: var(--accent-main);
    transition: width var(--motion-fast) var(--motion-spring);
  }

  :host([indeterminate]) [part="fill"] {
    animation: kp-progress-indeterminate 1.2s var(--motion-spring) infinite;
  }

  @keyframes kp-progress-indeterminate {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(250%);
    }
  }
`;
