import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Related = styled(Link)`
  display: flex;
  padding: 0.4rem 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.fg};
  transition: all 0.1s ease-out;

  &:hover {
    transform: scale(1.04);
  }
`;

export const RelatedVideoImage = styled.img`
  width: 10rem;
  object-fit: cover;
`;

export const RelatedVideoData = styled.div`
  padding: 0 0.5rem;
  flex-grow: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RelatedVideoTitle = styled.p`
  font-family: sans-serif;
  font-weight: bold;
`;

export const RelatedVideoChannel = styled.p`
  font-family: sans-serif;
  margin: 0;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};
`;
