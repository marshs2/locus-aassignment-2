# keypressjs-react-wrapper

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/keypressjs-react-wrapper.svg)](https://www.npmjs.com/package/keypressjs-react-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install keypressjs-react-wrapper
```

## Usage

Can be used as a Wrapper "KeyboardShortcuts" as well as a HOC called "withKeypress", if you would require only some method to be called.
Pass the params combo, callback, description as shown below,

```jsx
import React, {useState} from 'react';
import { withKeypress, KeyboardShortcuts } from 'keypressjs-react-wrapper';

const ComponentA = () => {

    const [style, setStyle] = useState({background: 'blue'})

    const turnRed = () => {
        setStyle({
            background: style.background === 'blue' ? 'red': 'blue'
        });
    }

    return (
      <KeyboardShortcuts
          combo="shift a"
          callback={turnRed}
          description="Turns the component background color to green">
          <div style={style}>Component A</div>
      </KeyboardShortcuts>
    )
}

export default withKeypress(ComponentA, "shift a", () => console.log('callback called'));
```

## Get List of ActiveShortcuts Registered

Use the HOC withActiveShortcuts to wrap your component 

```
import { withActiveShortcuts } from'keypressjs-react-wrapper';

...

export default withActiveShortcuts(YourComponent)
```

## Known Issues
There is a known issue with 'withActiveShortcuts' HOC, that prevents it from sharing the list of shortcuts

## License

MIT © [marshs2](https://github.com/marshs2)
