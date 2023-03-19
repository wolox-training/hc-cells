import { css } from "lit-element";

export default css`

.body-white {
    background-color: beige;
    height: 100vh;
    width: 100vw;
  }
  
  .login-container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
    background-image: url(https://img.freepik.com/foto-gratis/fondo-pantalla-halloween-calabazas-malvadas_23-2149122584.jpg?w=1800&t=st=1666879552~exp=1666880152~hmac=c194ee4d337bdd88b07936f8e1e326735700d564d9c6748b7e0497f1bf1fda75);
    /* background-image: url(https://www.tuexperto.com/wp-content/uploads/2021/10/halloween10.gif); */
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
  }
  
  .login-wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    width: 100%;
  }
  
  .login-card {
    background-color: white;
    border-top: 8px solid blue;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    padding: 28px 24px 0;
    width: 100%;
  }
  
  .login-logo {
    display: flex;
    height: 70px;
    justify-content: center;
    position: relative;
    width: 100%;
    content: url(https://trello.com/1/cards/6309415928fdec01ea29cb34/attachments/6309415a28fdec01ea29ced7/download/LogoWolox.png);
    &::after {
      background-image: url(assets/imgs/LogoWolox-Original.png);
      background-repeat: no-repeat;
      background-size: cover;
      content: "";
      height: inherit;
      position: absolute;
      width: 212px;
    }
  }
  
  .form-label {
    display: flex;
    font-size: 16px;
    font-weight: lighter;
    margin: 8px 0;
    width: 100%;
  }
  
  .form-input {
    border-radius: 5px;
    display: flex;
    height: 32px;
    margin-bottom: 16px;
    width: 100%;
    &[password] {
      margin-bottom: 24px;
    }
  }
  
  .login-btn {
    align-items: center;
    border-radius: 5px;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    height: 32px;
    justify-content: center;
    margin-bottom: 24px;
    width: 100%;
  }
  
  .primary {
    background-color: green;
    color: white;
    margin-bottom: 40px;
    position: relative;
  
    &::after {
      background-color: gray;
      bottom: -24px;
      content: "";
      min-height: 1px;
      position: absolute;
      width: 100%;
    }
  }
  
  .secundary {
    border: 2px solid green;
    color: green;
  }
`; 
