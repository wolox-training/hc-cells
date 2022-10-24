import { LitElement, html } from "lit-element";

export class SearcherComp extends LitElement {
  static get properties() {
    return {
      cover: { searcher: Object },
      result: { type: Array },
      data: { type: Array },
    };
  }

  constructor() {
    super();
    this.data = [];
    this.result = this.data;
  }

  sendData(data) {
    this.dispatchEvent(
      new CustomEvent("datasave", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="lupita">
        <div class="input">
          <input @input=${this.getText} size="100" type="text" name="searcher" 
                  id="searcher" placeholder="Buscar por Titulo de Libros"/>
        </div>
      </div>
    `;
  }

  getText(event) {
    const input = event.target;
    this.filterData(input.value);
  }

  filterData(input) {
    console.log(input, this.result);
    this.result = this.data.filter(product => product.book_title.toLowerCase().indexOf(input) !== -1);

    if (this.result.length < 1)
      this.result = [
        {book_title: "Lo siento no poseemos este libro", value: "Lo siento no poseemos este libro", },
      ];
    this.sendData(this.result);
  }
}

customElements.define("searcher-comp", SearcherComp);
