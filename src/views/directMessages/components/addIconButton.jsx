import * as React from 'react';
import useSound from 'use-sound';

import { PrimaryOutlineButton } from 'src/components/button';
import AddIcon from '@material-ui/icons/Add';

function AddIconButton({size , to , datacy }) {
    
    const [clickSound] = useSound('/sounds/click.mp3', { volume: 0.25 });

    return (
        <PrimaryOutlineButton
              onClick = {() => clickSound()}
              size={size}
              to={to}
            >
              <AddIcon />
        </PrimaryOutlineButton>
    );
}

export default AddIconButton;