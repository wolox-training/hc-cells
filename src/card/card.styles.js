import { css } from "lit-element";

export default css`
  .body-search { 
      display: flex;
      justify-content: center;
    }
    
  .list-wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    width: 100%;
  }

  .list-cards {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 936px;
    width: 100%;
  }

  .list-card {
    background: white;
    border: solid;
    box-shadow: 4px 4px 10px 0 rgba($black, 0.5);
    display: flex;
    flex-flow: column;
    margin: 16px;
    max-height: 300px;
    max-width: 198px;
    padding: 28px 28px 24px;
    transition: transform 0.2s;
  }

  .img-cover{
    margin-bottom: 12px;
    max-width: 142px;
    max-height: 200px;
  }

  .h1 {
    color: gray;
    font-size: 14px;
  }

  .h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
`; 

