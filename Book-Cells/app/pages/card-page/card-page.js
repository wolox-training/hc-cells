import {CellsPage} from '@cells/cells-page';
import { html,css } from 'lit-element';
import '../../elements/card/card';

class CardPage extends CellsPage{
    static get is() {
        return 'card-page';
    }

    static get properties() {
      return {
      };
    }
  
    constructor() {
      super();
    }

  render() {
    return html` 
    <cells-template-paper-drawer-panel mode="seamed">
      <div slot="app__main" class="container">
      <detail-comp></detail-comp>
      </div>
    </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [];
  }
}
 
 window.customElements.define(CardPage.is, CardPage);
 