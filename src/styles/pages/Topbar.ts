import styled from 'styled-components'

const Topbar = styled.div`
  width: 100vw;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${props => props.theme.colors.primary};

  .logo {
    width: 30%;
    color: ${props => props.theme.colors.white};
  }

  .topbar-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 100%
  }

  .topbar-nav__item {
    margin: 0 10px;
  }

  h2 {
    color: ${props => props.theme.colors.white};
  }

  .topbar-logo {
      width: 40px;
      height: 40px;
  }

  .topbar-nav__item__description {
      font-size: 14px;
      color: ${props => props.theme.colors.white};
  }

  @media screen and (max-width: 728px) {
    .topbar-nav__item__description {
      display: none;
    }
  }


`

export {Topbar}
