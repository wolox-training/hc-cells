import { LitElement, html } from "lit-element";

export class BuscadorComp extends LitElement {
  static get properties() {
    return {
      cover: { buscador: Object },
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
          <input @input=${this.getText} size="100" type="text" name="buscador" 
                  id="buscador" placeholder="Buscar por Titulo de Libros"/>
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
    this.result = [];
    this.data.map((product) => {
      const name = product.book_title.toLowerCase();

      if (name.indexOf(input) !== -1) this.result = [...this.result, product];
    });

    if (this.result.length < 1)
      this.result = [
        {book_title: "Lo siento no poseemos este libro", value: "Lo siento no poseemos este libro", },
      ];
    this.sendData(this.result);
  }
}

customElements.define("buscador-comp", BuscadorComp);
