import {CellsPage} from '@cells/cells-page';
import { html,css } from 'lit-element';
import styles from './list.style.js';

class ListComp extends CellsPage {

  static get styles(){
    return [styles];
  }

   static get properties () {
    return {
      covers: { type: Object },
      result: {typer: Array},
    }
  }

  constructor() {
    super();
    this.covers = [];
    this.result = [];
    this.dataFromSearcher();
  }

  onClick(cover) {
    let event = new CustomEvent("cover-clicked", {
      detail: cover.author
    });
    this.dispatchEvent(event);
  }

  processData(data) {
    if (data.lenght = false) {
      this.result= this.covers; 
    } else {
      this.result=data;
    }
  }

  dataFromSearcher(){
    this.addEventListener('datasave', (e)=> this.processData (e.detail.data));
  }
  
  render() {
    console.log(this.covers);
    return html`
      <div class="lupita">
        <searcher-comp .data=${this.covers}></searcher-comp>
        <div class="container">
          ${this.result.map((pok) => html` <book-comp @click=${() => this.onClick(pok)} .cover=${pok}></book-comp>`)}
        </div>
      </div>
    `;
  }
}

customElements.define("list-comp", ListComp);
