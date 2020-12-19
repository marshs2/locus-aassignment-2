import React from 'react'

import 'keypressjs-react-wrapper/dist/index.css'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ListComponent from './ListComponent';
import { ActiveShortCutsProvider } from 'keypressjs-react-wrapper';

const App = () => (
  <ActiveShortCutsProvider>
    <ComponentA />
    <ComponentB />
    <ComponentC />
    <ListComponent/>
  </ActiveShortCutsProvider>
)

export default App;
