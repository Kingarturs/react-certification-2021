import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 3.5rem);
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  gap: 30px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.bg};
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
