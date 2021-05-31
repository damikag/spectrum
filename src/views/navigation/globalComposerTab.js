// @flow
import React from 'react';
import Icon from 'src/components/icon';
import Tooltip from 'src/components/tooltip';
import { NavigationContext } from 'src/helpers/navigation-context';
import { MIN_WIDTH_TO_EXPAND_NAVIGATION } from 'src/components/layout';
import { AvatarGrid, AvatarLink, Label, IconWrapper } from './style';
import useSound from 'use-sound';

const GlobalComposerTab = () => {
  const isWideViewport =
    window && window.innerWidth > MIN_WIDTH_TO_EXPAND_NAVIGATION;
  const [clickSound] = useSound('/sounds/click.mp3', { volume: 0.25 });

  const setNavigationIsOpenWithAudio = (value, func) => {
    clickSound();
    return func(value);
  };

  return (
    <NavigationContext.Consumer>
      {({ setNavigationIsOpen }) => (
        <Tooltip
          content="New post"
          placement={'left'}
          isEnabled={!isWideViewport}
        >
          <AvatarGrid>
            <AvatarLink
              to={{ pathname: '/new/thread', state: { modal: true } }}
              data-cy="navigation-composer"
              onClick={() =>
                setNavigationIsOpenWithAudio(false, setNavigationIsOpen)
              }
            >
              <IconWrapper>
                <Icon glyph="post" />
              </IconWrapper>

              <Label>New Post</Label>
            </AvatarLink>
          </AvatarGrid>
        </Tooltip>
      )}
    </NavigationContext.Consumer>
  );
};

export default GlobalComposerTab;
