import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.border};
`;

export const SearchBar = styled.input`
  font-size: 1rem;
  width: 200px;
  border-radius: 5px;
  padding: 0.4rem 1rem;
  border: 2px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  margin-right: 1rem;

  &::placeholder {
    color: #c8c8c8;
  }
`;

export const NavBarSection = styled.div`
  display: flex;
  align-items: center;
`;

export const OptionsSection = styled(NavBarSection)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileSection = styled(NavBarSection)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.fg};
`;

export const LoginButton = styled(Link)`
  color: white;
  background-color: ${(props) => props.theme.accent};
  height: 35px;
  width: 80px;
  font-size: 0.9rem;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverAccent};
  }
`;

export const HamburgerIcon = styled.i`
  font-size: large;
  color: ${(props) => props.theme.fg};
  padding: 0.5rem;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.border};
  }
`;
