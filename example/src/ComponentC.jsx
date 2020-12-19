import React, {useState} from 'react';
import { KeyboardShortcuts } from 'keypressjs-react-wrapper';

const ComponentC = () => {

    const [blue, setBlue] = useState({background: 'blue'})

    const [yellow, setYellow] = useState({background: 'yellow'})

    const turnYellow = () => {
        setYellow({
            background: yellow.background === 'yellow' ? 'teal': 'yellow'
        });
    }

    const turnBlue = () => {
        setBlue({
            background: blue.background === 'blue' ? 'pink': 'blue'
        });
    }
        return (
            <>
                <KeyboardShortcuts
                    combo="shift c"
                    callback={turnBlue}
                    description="Turns the component background color to blue">
                    <div style={blue}>Component C</div>
                </KeyboardShortcuts>
                <KeyboardShortcuts
                    combo="shift c"
                    callback={turnYellow}
                    description="Turns the component background color to yellow">
                    <div style={yellow}>Component D</div>
                </KeyboardShortcuts>
            </>
        )
}

export default ComponentC;