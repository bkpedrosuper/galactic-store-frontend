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
    display: grid;
    grid-template-areas:
      "image info"
      "extra extra";
    grid-template-columns: 1fr 2fr;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    background-color: ${props => props.theme.colors.primary};      
    padding: 10px;
    border-radius: 8px;
    border-left: 7px solid ${props => props.theme.colors.secondary};

    margin: 8px 0;
  }

  .card:hover {
    cursor: pointer;
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
    height: 100px;
    width: 100px;
    align-self: center;
    justify-self: center;
  }

  .card-info {
    grid-area: info;
    color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
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