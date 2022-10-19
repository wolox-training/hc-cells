import { LitElement, html } from 'lit-element';
import styles from './list.style.js';



class ListComp extends LitElement {

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
    this.dataFromBuscador();
  }

  onClick(cover) {
    let event = new CustomEvent("cover-clicked", {
      detail: cover.author
    });
    this.dispatchEvent(event);
  }
  processData(data) {
    if (data.lenght == 0) {
      this.result= this.covers; 
    } else {
      this.result=data;
    }
  }

  dataFromBuscador(){

    this.addEventListener('datasave', (e)=> this.processData (e.detail.data));

  }
  
  render() {
    console.log(this.covers);
    return html`
      <div class="lupita">
        <buscador-comp .data=${this.covers}></buscador-comp>
        <div class="container">
          ${this.result.map(
            (pok) => html`
              <book-comp
                @click=${() => this.onClick(pok)}
                .cover=${pok}
              ></book-comp>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define("list-comp", ListComp);
