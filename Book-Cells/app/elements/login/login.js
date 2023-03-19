import {CellsPage} from '@cells/cells-page';
import { html,css } from 'lit-element';
import styles from "./login.style";

class LoginComp extends CellsPage {

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
}

goGenesis(){
this.navigate('genesis'); 
}

render() {

return html` 
  
<body class="body-white">
  <div class="login-container">
  <div class="login-wrapper">
  <div class="login-card">
  <div class="login-logo"></div>
    <form class="login-form">
    <label class="form-label" for="email">Email</label>
    <input class="form-input" type="email" id="email" required>
    <label class="form-label" for="password">Password</label>
    <input class="form-input" type="password" id="password" password required>
    <button class="login-btn primary" type="submit" @click= "${()=>this.goGenesis()}">Login</button>
    </form>
    <button class="login-btn secundary">Sign Up</button>
  </div>
  </div>
  </div>
</body>
      `;
    }
  }
  
  customElements.define("login-comp", LoginComp);
  