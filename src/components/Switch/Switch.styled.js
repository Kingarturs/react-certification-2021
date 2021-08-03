import styled from 'styled-components';

export const SwitchContainer = styled.div`
  width: ${(props) => props.size * 1.8}rem;
  height: ${(props) => props.size}rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.border};
  border-radius: ${(props) => props.size}rem;
  padding: ${(props) => props.size * 0.05}rem;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export const SwitchKnob = styled.div`
  width: ${(props) => props.size * 0.9}rem;
  height: ${(props) => props.size * 0.9}rem;
  background-color: ${(props) => props.theme.accent};
  border-radius: 50%;
  margin-left: ${(props) => (props.active ? props.size * 0.8 : 0)}rem;
  transition: margin 0.2s ease-out;
`;
