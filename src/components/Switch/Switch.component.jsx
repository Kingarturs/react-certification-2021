import React from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.div`
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

const SwitchKnob = styled.div`
  width: ${(props) => props.size * 0.9}rem;
  height: ${(props) => props.size * 0.9}rem;
  background-color: ${(props) => props.theme.accent};
  border-radius: 50%;
  margin-left: ${(props) => (props.active ? props.size * 0.8 : 0)}rem;
  transition: margin 0.2s ease-out;
`;

function Switch(props) {
  const { theme, size, onClick, active } = props;

  return (
    <SwitchContainer onClick={onClick} theme={theme} size={size} active={active}>
      <SwitchKnob theme={theme} size={size} active={active} />
    </SwitchContainer>
  );
}

export default Switch;
