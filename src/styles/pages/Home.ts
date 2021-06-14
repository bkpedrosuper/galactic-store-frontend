import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
`