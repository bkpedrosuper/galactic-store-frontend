import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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