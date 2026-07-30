import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  [part="base"] {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    font-family: var(--font-family-body);
    font-size: var(--font-size-sm);
  }

  ::slotted(a) {
    color: var(--color-text-muted);
    text-decoration: none;
    font-weight: var(--font-weight-medium);
    transition: color var(--motion-fast) var(--motion-spring);
  }

  ::slotted(a:hover) {
    color: var(--accent-main);
    text-decoration: underline;
  }

  ::slotted([data-breadcrumb-last]) {
    color: var(--color-text-main);
    font-weight: var(--font-weight-bold);
    pointer-events: none;
  }

  ::slotted(*)::after {
    content: "›";
    margin-left: var(--spacing-xs);
    color: var(--color-text-muted);
    font-weight: var(--font-weight-bold);
  }

  ::slotted([data-breadcrumb-last])::after {
    content: none;
  }
`;
