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
  
    @include for-mobile {
    flex-direction: column;
    height: 667px;
    margin: auto;
    width: 376px;
    }
  }


  .redirect {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    padding: 20px;
    width: 35px;
    @include for-mobile {
      align-self: center;
      justify-self: center;
      order: 1;
      padding: 20px;
    }
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

    @include for-mobile {
      flex-direction: column;
      height: 570px;
      justify-self: center;
      margin-right: -20px;
      padding: 16px;
      width: 100%;
      width: 336px;
    }
  }

  .line-green {
    background-color: green;
    display: flex;
    flex-direction: row;
    height: 4px;
    width: 540px;

    @include for-mobile {
      height: 4px;
      width: 300px;
    }
  }

  .img-wrapper {
    display: flex;
    margin-right: 52px;
    position: relative;

    @include for-mobile {
      margin-bottom: 21px;
      margin-left: 62px;
      margin-top: 38px;
    }
  }

  .img-cover {
    height: 368px;
    width: 261px;

    @include for-mobile {
      justify-self: center;
      max-height: 299px;
      max-width: 212px;
    }
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

    @include for-mobile {
      height: 83px;
      transform: rotate(15deg);
      width: 66.17px;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
  }

  .book-title {
    font-size: 32px;
    font-weight: 700;

    @include for-mobile {
      font-size: 24px;
      font-weight: 700;
      height: 39px;
      line-height: 38px;
      width: 161px;
    }
  }

  .book-genre {
    color: gray;
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;

    @include for-mobile {
      font-size: 16px;
      font-weight: 700;
      height: 16px;
      line-height: 19px;
      width: 98px;
    }
  }

  .book-title-wrapper {
    margin-bottom: 12px;

    @include for-mobile {
      margin-bottom: 6px;
    }
  }

  .book-detail-item {
    margin-top: 36px;

    @include for-mobile {
      margin-top: 18px;
    }
  }

  .book-detail-title {
    color: black;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;

    @include for-mobile {
      font-size: 14px;
      font-weight: 700;
      height: 22px;
      line-height: 24px;
    }
  }

  .book-text {
    color: gray;
    font-size: 20px;
    line-height: 24px;

    @include for-mobile {
      font-size: 14px;
      height: 22px;
      line-height: 24px;
    }
  }
`;
