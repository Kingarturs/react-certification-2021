import styled from 'styled-components';

export const VideoDetailsPageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 3.5rem);
  background-color: ${({ theme }) => theme.bg};
  overflow-y: auto;
  padding-bottom: 1rem;
`;

export const VideoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  overflow-x: hidden;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0rem;
  }
`;

export const VideoContainer = styled.div`
  width: 65%;
  height: 100%;
  flex-shrink: 0;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const VideoInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const VideoHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  margin: 0;
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.fg};
`;

export const Description = styled.pre`
  margin: 0;
  width: 100%;
  font-size: 0.9rem 0;
  font-family: 'poppins', sans-serif;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.secondaryFg};
`;

export const RelatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0.6rem;

  @media screen and (max-width: 600px) {
    padding: 1;
  }
`;

export const AddFavoriteIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: ${(props) => props.theme.fg};

  &:hover {
    background-color: ${(props) => props.theme.border};
    cursor: pointer;
  }
`;

export const RemoveFavoriteIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.accent};

  &:hover {
    background-color: #e74c3c;
    cursor: pointer;
  }
`;
