import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FavoriteVideoContainer = styled(Link)`
  width: 100%;
  height: 8rem;
  display: flex;
  transition: all 0.05s ease-out;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.border};
  color: ${(props) => props.theme.fg};
  text-decoration: none;
  overflow: hidden;
  border-radius: 5px;

  &:hover {
    transform: scale(1.008);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 1rem;
  }
`;

export const FavoriteVideoImage = styled.img`
  object-fit: cover;
`;

export const VideoInfoContainer = styled.div`
  margin-left: 1rem;
  padding: 1rem 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 1rem;
  }
`;

export const FavoriteTitle = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
  font-size: 1rem;
`;

export const FavoriteDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  height: 3rem;
  overflow: hidden;
  color: ${(props) => props.theme.secondaryFg};
  @media screen and (max-width: 768px) {
    height: 4rem;
  }
`;

export const FavoriteChannel = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.accent};

  @media screen and (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;
