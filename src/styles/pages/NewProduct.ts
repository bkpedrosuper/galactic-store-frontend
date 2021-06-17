import styled from 'styled-components'

export const NewProduct = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;


  .flex {
    display: flex;
    width: 100%;
  }

  .justify-center {
    justify-content: center;
  }
  
  .align-center {
    align-items: center;
  }

  .list {
      display: flex;
      flex-direction: column;
      margin: 20px 5px;
  }

  .card {
    width: 100%;
    min-height: 200px;
    display: grid;
    grid-template-areas:
        "select select select"
        "image info info"
        "empty empty button";
    grid-template-columns: 1fr 2fr;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    padding: 10px 25px;
    border-radius: 8px;
    color: color: ${props => props.theme.colors.black};

    margin: 8px 20px;
  }

  @media screen and (max-width: 728px) {
    .card {
        width: 350px;
    }
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .card-image {
    grid-area: image;
    height: 120px;
    width: 120px;
    align-self: start;
    justify-self: start;
  }

  .card-info {
    grid-area: info;
    color: ${props => props.theme.colors.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-select {
      grid-area: select;
      width: 100%;
      justify-self: center;
      margin: 10px 0;
      margin-bottom: 20px;
  }

  .card_button{
    grid-area: button;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 10px 0;
  }

  .button_product {
      align-self: end;
  }

  .buyout {
    color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: extra;
    padding: 10px 0;
  }
`