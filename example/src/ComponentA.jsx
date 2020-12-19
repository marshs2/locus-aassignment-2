import React, {useState} from 'react';
import { withKeypress, KeyboardShortcuts } from 'keypressjs-react-wrapper';

const ComponentA = () => {

    const [style, setStyle] = useState({background: 'blue'})

    const turnRed = () => {
        setStyle({
            background: style.background === 'blue' ? 'red': 'blue'
        });
    }

    return (<KeyboardShortcuts
        combo="shift a"
        callback={turnRed}
        description="Turns the component background color to green">
        <div style={style}>Component A</div>
    </KeyboardShortcuts>
)
}

export default withKeypress(ComponentA, "shift a", () => console.log('callback called'));