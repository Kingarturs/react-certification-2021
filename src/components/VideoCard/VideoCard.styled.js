import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoCardContainer = styled(Link)`
  width: 18rem;
  height: 22rem;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.05s ease-out;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

export const VideoCardImage = styled.img`
  height: 10rem;
  width: 18rem;
  object-fit: cover;
  border: none;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.1rem;
  white-space: pre;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Channel = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.accent};
`;

export const Description = styled.p`
  font-size: 0.8rem;
  height: 4rem;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: justify;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.secondaryFg};
`;

export const DataContainer = styled.div`
  flex: 1;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 0 0 10px 10px;
`;
