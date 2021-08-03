import React from 'react';
import { SwitchContainer, SwitchKnob } from './Switch.styled';

function Switch(props) {
  const { theme, size, onClick, active } = props;

  return (
    <SwitchContainer
      onClick={onClick}
      theme={theme}
      size={size}
      active={active}
      data-testid="switch-theme"
    >
      <SwitchKnob theme={theme} size={size} active={active} />
    </SwitchContainer>
  );
}

export default Switch;
