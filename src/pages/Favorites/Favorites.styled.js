import styled from 'styled-components';

export const FavoritePageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 3.5rem);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
`;

export const FavoritesTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const FavoritesContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 2rem;
`;
