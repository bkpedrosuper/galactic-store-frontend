import styled from 'styled-components'

export const UserCard = styled.div`
  .card {
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 8px;
    margin: 8px 0;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .card-image {
    width: 100%;
  }

  .card-info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`