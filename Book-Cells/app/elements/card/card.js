import {CellsPage} from '@cells/cells-page';
import { html,css } from 'lit-element';
import styles from "./card.styles";

class CardComp extends CellsPage {

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

goDetail(){
this.publish('card', this.cover),
this.navigate('card'); 
}

render() {
  
  return html` 

    <div class="body-list">
      <div class="container">
      <div class="list-wrapper">
      <div class="list-cards">
      <div class="list-card">
      <div class="list-cover" @click= "${()=>this.goDetail()}">
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
