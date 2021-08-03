import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  gap: 30px;
  background-color: ${({ theme }) => theme.bg};
`;
