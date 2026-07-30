import { LitElement, html, nothing } from "lit";
import { property } from "lit/decorators.js";

export class PaginationBase extends LitElement {
  @property({ type: Number }) page = 1;
  @property({ type: Number, attribute: "total-pages" }) totalPages = 1;
  @property({ type: Number, attribute: "sibling-count" }) siblingCount = 1;

  private _goTo(page: number) {
    const clamped = Math.min(Math.max(page, 1), this.totalPages);
    if (clamped === this.page) return;
    this.page = clamped;
    this.dispatchEvent(
      new CustomEvent("kp-change", {
        detail: { page: this.page },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _getPageList(): (number | "ellipsis")[] {
    const total = this.totalPages;
    const current = this.page;
    const sibling = this.siblingCount;
    const totalVisible = sibling * 2 + 5; // first, last, current, 2 ellipses

    if (total <= totalVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(current - sibling, 1);
    const rightSibling = Math.min(current + sibling, total);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < total - 1;

    const pages: (number | "ellipsis")[] = [1];

    if (showLeftEllipsis) pages.push("ellipsis");
    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i !== 1 && i !== total) pages.push(i);
    }
    if (showRightEllipsis) pages.push("ellipsis");
    pages.push(total);

    return pages;
  }

  protected render() {
    if (this.totalPages <= 1) return nothing;

    const pages = this._getPageList();

    return html`
      <nav part="base" role="navigation" aria-label="Pagination">
        <button
          part="control"
          type="button"
          aria-label="Previous page"
          ?disabled=${this.page <= 1}
          @click=${() => this._goTo(this.page - 1)}
        >
          ‹
        </button>

        ${pages.map((p) =>
          p === "ellipsis"
            ? html`<span part="ellipsis">…</span>`
            : html`
                <button
                  part="page"
                  type="button"
                  aria-label="Page ${p}"
                  aria-current=${p === this.page ? "page" : nothing}
                  @click=${() => this._goTo(p as number)}
                >
                  ${p}
                </button>
              `
        )}

        <button
          part="control"
          type="button"
          aria-label="Next page"
          ?disabled=${this.page >= this.totalPages}
          @click=${() => this._goTo(this.page + 1)}
        >
          ›
        </button>
      </nav>
    `;
  }
}
