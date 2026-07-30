import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    display: block;
    box-sizing: border-box;
    text-decoration: none;

    padding: var(--spacing-lg);
    
    background: var(--color-surface);
    color: var(--color-text-main);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-container);
    box-shadow: 4px 4px 0px var(--color-border);
    
    transition: all var(--motion-fast) 
      var(--motion-spring);
  }


  :host([interactive]) [part="base"] {
    cursor: pointer;
  }

  :host([interactive]) [part="base"]:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--accent-shift-1);
  }

  :host([interactive]) [part="base"]:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--color-border);
  }

  :host([interactive]) [part="base"]:focus-visible {
    outline: 2px solid var(--accent-main);
    outline-offset: 4px;
  }
`;