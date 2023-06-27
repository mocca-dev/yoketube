'use client';

import React, { Dispatch, createContext, useReducer } from 'react';

type StateType = {
  show: boolean;
  list: string[];
  playedList: any[][];
  currentDay: number;
};

type ActionType = {
  type: string;
  payload?: any;
};

const initialState: StateType = {
  show: false,
  list: [],
  playedList: [[], [], [], [], [], [], []],
  currentDay: -1,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, show: true };
    case 'HIDE':
      return { ...state, show: false };
    case 'SET_CURRENTDAY':
      return { ...state, currentDay: action.payload };
    case 'SET_LIST':
      return {
        ...state,
        list: action.payload,
      };
    case 'SET_PLAYED': {
      state.playedList[state.currentDay][action.payload] = true;
      return { ...state, playedList: state.playedList };
    }
    case 'RESET_PLAYED': {
      const playedList = [...state.playedList];
      playedList[action.payload] = [];

      return { ...state, playedList };
    }
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
