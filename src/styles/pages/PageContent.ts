import styled from 'styled-components'

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-family: 'Montserrat', sans-serif;

  .page-header{
      width: 60%;
      display: flex;
      flex-direction: column;
      margin: 10px 5px;
  }

  .page-title {
      align-self: start;
      justify-self: start;
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin: 20px 0;
  }

  .confirm-button {
    width: 60%;
    display:flex;
    justify-content: flex-end;
    padding: 0 25px;
  }

  .button {
    padding: 15px;
    border-radius: 8px;
    font-weight: bold;
    color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.secondary};
    background-image: -webkit-linear-gradient(45deg, ${props => props.theme.colors.secondary} 50%, transparent 50%);
    background-image: linear-gradient(45deg, ${props => props.theme.colors.secondary} 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 200ms ease-in-out;
    transition: background 300ms ease-in-out;
  }
  .button:hover {
    background-position: 0;
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }

  .button_confirm {
    border-color: ${props => props.theme.colors.primary};
    background-image: -webkit-linear-gradient(45deg, ${props => props.theme.colors.primary} 50%, transparent 50%);
    background-image: linear-gradient(45deg, ${props => props.theme.colors.primary} 50%, transparent 50%);
    color: ${props => props.theme.colors.black};
    justify-self: end;
    align-self:end;
  }
  .button_confirm:hover {
    color: ${props => props.theme.colors.white};
  }

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
  
  .empty-div {
    padding: 15px;
  }

  @media screen and (min-width: 728px) {
    .list {
      width: 60%;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
    }
  }

`