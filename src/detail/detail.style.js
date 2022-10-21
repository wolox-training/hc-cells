import { css } from "lit-element";

export default css`

  body {
  background-color: beige;
  height: 100vh;
  width: 100vw;
  }

  .container {
    background-color: #D4AF37;
    margin-top: 200px;
    align-items: center;
    color: gray;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  .redirect {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    padding: 20px;
    width: 35px;
  }

  .redirect-button {
    display: inline;
    font-size: 20px;
    content: url(https://trello.com/1/cards/6309415928fdec01ea29cb32/attachments/6309415a28fdec01ea29cee9/download/back-arrow-20.png);
    
    &::before {
      content: url(assets/imgs/back-arrow-20.png);
      margin-right: 12px;
    }
  }

  .card {
    background-color: white;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    height: 416px;
    padding: 24px;
    width: 900px;
  }

  .line-green {
    background-color: green;
    display: flex;
    flex-direction: row;
    height: 4px;
    width: 540px;
  }

  .img-wrapper {
    display: flex;
    margin-right: 52px;
    position: relative;
  }

  .img-cover {
    height: 368px;
    width: 261px;
  }

  .img-wrapper::after {
    background-image: url(https://trello.com/1/cards/6309415928fdec01ea29cb35/attachments/6309415a28fdec01ea29cebd/download/badge.png);
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    height: 118px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(30%, -15%) rotate(15deg);
    width: 94px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
  }

  .book-title {
    font-size: 32px;
    font-weight: 700;
  }

  .book-genre {
    color: gray;
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
  }

  .book-title-wrapper {
    margin-bottom: 12px;
  }

  .book-detail-item {
    margin-top: 36px;
  }

  .book-detail-title {
    color: black;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
  }

  .book-text {
    color: gray;
    font-size: 20px;
    line-height: 24px;
  }
`;
