import styled from 'styled-components'

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

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

  p {
    margin: 14px;
    font-size: 24px;
    line-height: 32px;
    color: ${props => props.theme.colors.secondary};
  }

  .button {
    padding: 15px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.secondary};
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