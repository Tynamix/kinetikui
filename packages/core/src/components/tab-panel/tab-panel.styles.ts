import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    padding-top: var(--spacing-md);
  }

  [part="base"][hidden] {
    display: none;
  }
`;
