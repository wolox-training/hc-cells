import { LitElement, html } from "lit-element";
import books from "./books.json" assert { type: "json" };
import './card/card.js';
import './detail/detail.js';
import './list/list.js';
import './searcher.js';

class AppComp extends LitElement {

  static get properties() {
    return {
      path: { attribute: false },
      cover: { attribute: false }
    }
  }

  constructor() {
    super();
    this.path = window.location.pathname;
    this.cover = {};
  }

  firstUpdated() {
    window.addEventListener("popstate", () => {
      this.path = window.location.pathname;
    });
    this.showDetail();
  }

  showDetail() {
    if (this.path !== "/") {
      this.cover = this.getBookByAuthor(this.path.replace("/", ""));
      if (!this.cover) {
        window.location.pathname = "/";
      }
    }
  }

  coverClicked({ detail }) {
    this.cover = this.getBookByAuthor(detail);
    this.path = `/${detail}`;
    window.history.pushState({}, "", this.path);
  }

  getBookByAuthor(author) {
    return books.results.find((pok) => pok.author === author);
  }

  render() {
    return html`
      ${this.path === "/" ? 
              html `<list-comp @cover-clicked=${this.coverClicked} .covers=${books.results} .result=${books.results}> </list-comp>` : 
              html `<detail-comp .cover=${this.cover}></detail-comp>`
        }
    `;
  }
}

customElements.define("app-comp", AppComp);
