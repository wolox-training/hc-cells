import { LitElement, html } from "lit-element";
import styles from "./detail.style.js";


class DetailComp extends LitElement {

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      cover: { book_title: Object }
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
  <body class="body-detail">
  <div class="container">
  <div class="redirect">
    <a class="redirect-button" href= "http://localhost:8000/">Atrás</a>
  </div>
  <div class="card">
  <div class="img-wrapper">
    <img src="${this.cover.sprites?.img2}" alt="${this.cover.author}" />
  </div>
  <div class="content-wrapper">
  <div class="book-title-wrapper">
    <h1 class="book-title">Título del libro</h1>
    <p class="book-genre">(género)</p>
  </div>
  <div class="line-green">
  </div>
  <div class="book-details-wrapper">
    <ul class="book-detail-list">
      <li class="book-detail-item">
        <span class="book-detail-title">Autor del libro:</span>
        <span class="book-text">Nombre del autor del libro</span>
      </li>
      <li class="book-detail-item">
        <span class="book-detail-title">Editorial:</span>
        <span class="book-text">Nombre de la editorial</span>
      </li>
      <li class="book-detail-item">
        <span class="book-detail-title">Año de publicación:</span>
        <span class="book-text">Año de publicación</span>
      </li>
    </ul>
  </div>
  </div>
  </div>
  </div>
  </body>
     
  `;
  }
}

customElements.define("detail-comp", DetailComp);
