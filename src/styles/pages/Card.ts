import styled from 'styled-components'

export const Card = styled.div`
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
    width: 470px;
    height: 130px;
    display: grid;
    grid-template-areas:
      "image info"
      "extra extra";
    grid-template-columns: 1fr 2fr;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    background-color: ${props => props.theme.colors.cardBackground};      
    padding: 10px;
    border-radius: 8px;

    margin: 8px 0;
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
    height: 80px;
    width: 80px;
    align-self: center;
    justify-self: center;
  }

  .card-info {
    grid-area: info;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .buyout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: extra;
    padding: 10px 0;
  }
`