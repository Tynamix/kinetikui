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

  [part="control"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--size-control-sm);
    height: var(--size-control-sm);
    flex-shrink: 0;
    background: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: 50%;
    box-shadow: 4px 4px 0px var(--color-border);
    transition: all var(--motion-fast, 0.15s) var(--motion-spring);
    position: relative;
  }

  [part="control"]::before {
    content: "";
    width: 42%;
    height: 42%;
    border-radius: 50%;
    background: var(--color-surface);
    transform: scale(0);
    transition: transform var(--motion-fast) var(--motion-spring);
  }

  [part="control"]::after {
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

  [part="input"]:focus-visible + [part="control"]::after {
    opacity: 1;
  }

  [part="input"]:focus-visible + [part="control"] {
    outline: none;
  }

  [part="label-container"] {
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-base);
    user-select: none;
    line-height: 1.2;
  }

  [part="base"]:hover:not([aria-disabled="true"]) [part="control"] {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--accent-shift-1);
  }

  [part="base"]:active:not([aria-disabled="true"]) [part="control"] {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--color-border);
  }

  :host([checked]) [part="control"] {
    background: var(--accent-main);
  }

  :host([checked]) [part="control"]::before {
    transform: scale(1);
  }

  :host([checked]) [part="base"]:hover:not([aria-disabled="true"]) [part="control"] {
    background: var(--accent-hover);
  }

  :host([disabled]) {
    opacity: 0.6;
    pointer-events: none;
    cursor: not-allowed;
  }

  :host([disabled]) [part="control"] {
    box-shadow: 2px 2px 0px var(--color-border);
    transform: translate(2px, 2px);
    background: var(--color-bg);
  }
`;
