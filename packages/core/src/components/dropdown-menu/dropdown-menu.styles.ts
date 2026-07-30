import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
  }

  kp-popover {
    display: inline-block;
  }

  [part="trigger"] {
    display: inline-block;
    cursor: pointer;
  }

  [part="menu"] {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 180px;
    margin: calc(var(--spacing-md, 16px) * -1);
    padding: var(--spacing-xs);
  }
`;
