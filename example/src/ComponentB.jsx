import React, {useState} from 'react';
// import { withKeypress } from 'keypressjs-react-wrapper';
import { KeyboardShortcuts } from 'keypressjs-react-wrapper';

const ComponentB  = () => {

    const [style, setStyle] = useState({background: 'red'})

    const turnGreen = () => {
        setStyle({
            background: style.background === 'red' ? 'green': 'red'
        });
    }
    return (
        <KeyboardShortcuts
            combo="shift b"
            callback={turnGreen}
            description="Turns the component background color to green">
            <div style={style}>Component B</div>
        </KeyboardShortcuts>
    )
}
export default ComponentB;