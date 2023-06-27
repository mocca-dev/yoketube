'use client';

import React, { Dispatch, createContext, useReducer } from 'react';

type StateType = {
  show: boolean;
  list: string[];
};

type ActionType = {
  type: string;
  payload?: any;
};

const initialState: StateType = {
  show: false,
  list: [],
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, show: true };
    case 'HIDE':
      return { ...state, show: false };
    case 'SET_LIST':
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export const ModalContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
