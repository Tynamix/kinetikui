import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    width: 100%;
  }

  [part="container"] {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  [part="label"] {
    font-family: var(--font-family-heading, 'Bricolage Grotesque', sans-serif);
    font-weight: var(--font-weight-bold, 700);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-main, #111111);
  }

  [part="input"] {
    appearance: none;
    width: 100%;
    box-sizing: border-box;
    font-family: var(--font-family-body, 'Plus Jakarta Sans', sans-serif);
    font-size: var(--font-size-base, 1rem);
    padding: 0.75rem 1rem;
    color: var(--color-text-main, #111111);
    background: var(--color-surface, #ffffff);
    
    border: var(--border-width, 3px) solid var(--color-border, #111111);
    border-radius: var(--radius-small, 6px 12px 6px 12px);
    box-shadow: 4px 4px 0px var(--color-border, #111111);
    
    transition: all var(--motion-fast, 0.15s) var(--motion-spring, cubic-bezier(0.34, 1.56, 0.64, 1));
  }

  [part="input"]:focus {
    outline: none;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--accent-main, #4f46e5);
    border-color: var(--accent-main, #4f46e5);
  }

  /* State: Error */
  :host([error]) [part="input"] {
    border-color: var(--color-danger, #e5484d);
    box-shadow: 4px 4px 0px var(--color-danger, #e5484d);
  }

  [part="error-message"] {
    font-family: var(--font-family-body, sans-serif);
    font-size: var(--font-size-xs, 0.75rem);
    color: var(--color-danger, #e5484d);
    font-weight: var(--font-weight-medium, 500);
  }

  :host([disabled]) [part="input"] {
    background: var(--color-bg, #f4f0eb);
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: 2px 2px 0px var(--color-border, #111111);
    transform: translate(2px, 2px);
  }
`;