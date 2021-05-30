import React from 'react';
import useSound from 'use-sound';

import {
    HoverWarnOutlineButton
  } from 'src/components/button';

export default function AccountDeleteButton({initDelete}) {
  const [clickSound] = useSound('/sounds/error.mp3', { volume: 0.25 });
  const onClick = () => {
      clickSound();
      return initDelete();
  }
    return (
        <HoverWarnOutlineButton
                data-cy="delete-account-init-button"
                color={'warn.default'}
                onClick={onClick}
                >
                Delete my account
        </HoverWarnOutlineButton>
    );
} 