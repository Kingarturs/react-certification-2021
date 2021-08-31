import styled from 'styled-components';

export const Menu = styled.div`
  width: ${(props) => (props.open ? 100 : 0)}%;
  transition: all 0.2s ease-out;
  height: calc(100vh - 3.5rem);
  background-color: ${(props) => props.theme.bg};
  box-sizing: border-box;
  display: none;
  position: absolute;
  overflow: hidden;
  right: 0;
  z-index: 2;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavItemContainer = styled.div`
  width: 100%;
  height: calc(100% - 7rem);
`;

export const NavItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fg};
  text-decoration: none;
  height: 3rem;
  padding: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.border};
  }
`;

export const DarkModeText = styled.span`
  color: ${(props) => props.theme.fg};
  margin-left: 0.5rem;
`;

export const DangerModeText = styled.span`
  color: ${(props) => props.theme.danger};
  margin-left: 0.5rem;
`;

export const SearchBar = styled.input`
  font-size: 1rem;
  width: 16rem;
  border-radius: 5px;
  padding: 0.4rem 1rem;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  margin-right: 1rem;
  position: relative;
  border: 2px solid ${(props) => props.theme.border};

  &::placeholder {
    color: ${(props) => props.theme.secondaryFg};
  }
`;
