import React, { useContext, useEffect, useState } from 'react'
import { Listener } from 'keypress.js';

let listener = new Listener();

let combos = [];

const setCombos = ((combo) => {
    combos = [combo]
})

const ActiveShortcuts = React.createContext(combos);

export const ActiveShortCutsProvider = ({ children }) => (
  <ActiveShortcuts.Provider value={combos}>
    {children}
  </ActiveShortcuts.Provider>
)

const ActiveShortcutsConsumer = ActiveShortcuts.Consumer;

export const withActiveShortcuts = (ComposableComponent) => {
  return () => {
    return (
      <ActiveShortcutsConsumer>
        {(combos) => (
          <ComposableComponent combos={combos}/>
        )}
      </ActiveShortcutsConsumer>
    )
  }
}

const unbindHelper = (createdComboListener) => {
  listener.unregister_combo(createdComboListener);
  setCombos([combos.filter((combo) => combo.createdComboListener !== createdComboListener )]);
}

export const KeyboardShortcuts = (props) => {
  const { combo, callback, description, children, ...otherProps} = props;
  return (
    withKeypress(
      () => (
        <React.Fragment>
          {children}
        </React.Fragment>
      ),
      combo,
      callback,
      description,
      otherProps
    )()
  )
}

// HOC
export const withKeypress = (ComposableComponent, combo, callback, description, ...otherProps) => {

  return () => {

    let createdComboListener = listener.simple_combo(combo, callback);

    useEffect(() => {
      setCombos([
        ...combos,
        {
          keys: combo,
          description,
          createdComboListener
        }
      ])
  
      return unbindHelper;
    
    }, []);

    return (
      <ComposableComponent {...createdComboListener} {...otherProps} />
    )
  }
}

export const unbindKeypress = ({ createdComboListener }) => {
  unbindHelper(createdComboListener);
}