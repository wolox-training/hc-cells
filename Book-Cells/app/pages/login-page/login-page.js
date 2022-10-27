import {CellsPage} from '@cells/cells-page';
import { html,css } from 'lit-element';
import '../../elements/login/login';

class LoginPage extends CellsPage{
    static get is() {
        return 'login-page';
    }

    static get properties() {
      return {
         
      };
    }
  
    constructor() {
      super();
    }
  
    goGenesis(){
      this.navigate('genesis'); 
      } 
     
  render() {
    return html` <cells-template-paper-drawer-panel mode="seamed">
      <div slot="app__main" class="container">
      <login-comp></login-comp>
      </div>
    </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [];
  }
}
 
 window.customElements.define(LoginPage.is, LoginPage);
 