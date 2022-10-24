import { LitElement, html } from "lit-element";
import styles from "./card.styles";

class CardComp extends LitElement {

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      cover: { type: Object }
    }
  }

  constructor() {
    super();
    this.cover = {
      sprites: {},
      author: "",
      book_title: []
    };
  }

render() {
  
  return html` 

    <div class="body-list">
      <div class="container">
      <div class="list-wrapper">
      <div class="list-cards">
      <div class="list-card">
      <div class="list-cover">
        <img class="img-cover" src="${this.cover.sprites?.img}" alt="${this.cover.author}">
        <h2 class="h2">${this.cover.author}</h2>
        <h1 class="h1">${this.cover.book_title}</h1>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
      
    `;
  }
}

customElements.define("book-comp", CardComp);

