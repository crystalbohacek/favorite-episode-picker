import React from 'react'
import { arrowFunctionExpression } from '@babel/types';

interface IState {
  episodes: [],
  favorites: []
}

const initialState:IState = {
  episodes: [],
  favorites: []
}

export const Store = React.createContext<IState>(initialState)

export default function StoreProvider(props: any): JSX.Element {
        return <Store.Provider value={initialState}>{props.children}</Store.Provider>
      }