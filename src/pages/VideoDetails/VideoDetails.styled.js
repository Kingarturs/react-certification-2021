import styled from 'styled-components';

export const VideoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bg};

  @media screen and (max-width: 1000px) {
    flex-direction: column;
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

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
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
