import {CellsPage} from '@cells/cells-page';
import { html,css } from 'lit-element';
import  books from '../../scripts/utils/books.js';
import '../../elements/card/card';
import '../../elements/detail/detail';
import '../../elements/list/list';
import '../../elements/login/login';
import '@cells-components/cells-template-paper-drawer-panel';


class GenesisPage extends CellsPage{
    static get is() {
        return 'genesis-page';
    }

    static get properties() {
      return {
        genesis:{},
        path: { attribute: false },
        cover: { attribute: false }
      };
    }
  
    constructor() {
      super();
      this.cover = {};
    }
  
     getBookByAuthor(author) {
       return books.results.find((pok) => pok.author === author);
     }

     goLogin(){
      this.navigate('login'); 
      }
     
  render() {
    return html` 
    <cells-template-paper-drawer-panel mode="seamed">
      <div slot="app__header"></div>
        <div slot="app__main" class="container">
        <list-comp .covers=${books.results} .result=${books.results}> </list-comp>
      </div>
    </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [];
  }
}
 
 window.customElements.define(GenesisPage.is, GenesisPage);
