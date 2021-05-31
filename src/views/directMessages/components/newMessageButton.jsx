import * as React from 'react';
import useSound from 'use-sound';

import { PrimaryOutlineButton } from 'src/components/button';

export default function({to}) {
    const [clickSound] = useSound('/sounds/click.mp3', { volume: 0.25 });

    return (
        <PrimaryOutlineButton 
            to={to} 
            onClick = {() => clickSound()}
        >
            New message
        </PrimaryOutlineButton>
    );
}