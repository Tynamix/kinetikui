import { css } from "lit";

export const styles = css`
  :host {
    display: -webkit-inline-flex;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: var(--font-family-body, system-ui, sans-serif);
    color: var(--color-text-main);
  }

  [part="base"] {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    position: relative;
  }

  [part="input"] {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    pointer-events: none;
  }

  [part="track"] {
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 2.75rem;
    height: var(--size-control-sm);
    flex-shrink: 0;
    padding: 2px;
    background: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: 999px;
    box-shadow: 4px 4px 0px var(--color-border);
    transition: all var(--motion-fast, 0.15s) var(--motion-spring);
  }

  [part="thumb"] {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--color-border);
    transform: translateX(0);
    transition: transform var(--motion-fast, 0.15s) var(--motion-spring),
      background var(--motion-fast, 0.15s) var(--motion-spring);
  }

  [part="track"]::after {
    content: "";
    position: absolute;
    inset: calc(var(--border-focus-offset) * -1);
    border-width: var(--border-focus-width);
    border-style: solid;
    border-color: var(--color-focus);
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--motion-fast) ease;
  }

  [part="input"]:focus-visible + [part="track"]::after {
    opacity: 1;
  }

  [part="label-container"] {
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-base);
    user-select: none;
    line-height: 1.2;
  }

  [part="base"]:hover:not([aria-disabled="true"]) [part="track"] {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--accent-shift-1);
  }

  [part="base"]:active:not([aria-disabled="true"]) [part="track"] {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--color-border);
  }

  :host([checked]) [part="track"] {
    background: var(--accent-main);
  }

  :host([checked]) [part="thumb"] {
    background: var(--color-surface);
    transform: translateX(20px);
  }

  :host([checked]) [part="base"]:hover:not([aria-disabled="true"]) [part="track"] {
    background: var(--accent-hover);
  }

  :host([disabled]) {
    opacity: 0.6;
    pointer-events: none;
    cursor: not-allowed;
  }

  :host([disabled]) [part="track"] {
    box-shadow: 2px 2px 0px var(--color-border);
    transform: translate(2px, 2px);
    background: var(--color-bg);
  }
`;
