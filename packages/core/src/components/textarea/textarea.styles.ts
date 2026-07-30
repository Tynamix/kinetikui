import { css } from "lit";

export const textareaStyles = css`
  :host {
    display: block;
    width: 100%;
  }

  .textarea-wrapper {
    display: flex;
    flex-direction: column;
    gap: calc(var(--font-size-xs) * 0.5);
    position: relative;
    width: 100%;
    height: 100%;
  }

  label {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-main);
    letter-spacing: var(--font-letter-spacing-wide);
    text-transform: uppercase;
  }

  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    min-height: calc(
      var(--font-size-base) * var(--font-line-height-normal) * 3
    );
    padding: var(--font-size-sm) var(--font-size-base);

    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-regular);
    line-height: var(--font-line-height-normal);
    letter-spacing: var(--font-letter-spacing-normal);
    color: var(--color-text-main);

    background-color: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-small);
    box-shadow: 4px 4px 0px var(--color-border);
    outline: none;

    transition:
      transform var(--motion-fast) var(--motion-spring),
      box-shadow var(--motion-fast) var(--motion-spring),
      border-color var(--motion-fast) var(--motion-spring),
      background-color var(--motion-fast) var(--motion-spring);
  }

  textarea::placeholder {
    color: var(--color-text-muted);
    opacity: 1;
  }

  textarea::-webkit-resizer {
    background-color: transparent;
    background-image: linear-gradient(
      135deg,
      transparent 50%,
      var(--color-border) 50%,
      var(--color-border) 65%,
      transparent 65%,
      transparent 80%,
      var(--color-border) 80%,
      var(--color-border) 95%,
      transparent 95%
    );
  }

  :host([resize="none"]) textarea {
    resize: none;
  }
  :host([resize="vertical"]) textarea {
    resize: vertical;
  }
  :host([resize="horizontal"]) textarea {
    resize: horizontal;
  }
  :host([resize="both"]) textarea {
    resize: both;
  }

  :host([resize="auto"]) textarea {
    resize: none;
    overflow-y: hidden;
  }

  textarea:not(:disabled):hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--color-border);
  }

  textarea:not(:disabled):focus {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--color-border);
    border-color: var(--accent-main);
  }

  textarea:disabled {
    background-color: var(--color-bg);
    color: var(--color-text-muted);
    cursor: not-allowed;
    box-shadow: 2px 2px 0px var(--color-border);
    transform: translate(2px, 2px);
  }

  .error-message {
    font-family: var(--font-family-body);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    color: var(--color-danger);
    margin-top: 4px;
  }

  .has-error textarea {
    border-color: var(--color-danger);
    box-shadow: 4px 4px 0px var(--color-danger);
  }

  :host * {
    scrollbar-width: thin;
    scrollbar-color: var(--color-border) transparent;
  }
`;
