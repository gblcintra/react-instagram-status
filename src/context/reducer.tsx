import { useReducer } from 'react';

import { StateProps, Action } from '../interface';

const initialState: StateProps = {
   item: null,
   modalIsOpen: false,
   photos: []
};

const dispatchState = (state: StateProps, action: Action) => {
   switch(action.type) {
      case 'TOGGLE_MODAL':
         return {
            ...state,
            modalIsOpen: !state.modalIsOpen
         }
      case 'SET_ITEM':
         return {
            ...state,
            item: action.payload.item
         }
      case 'SET_PHOTOS':
         return {
            ...state,
            photos: action.payload.photos
         }
      default:
         return state;
   }
};

const useStoryReducer = () => useReducer(dispatchState, initialState);

export { useStoryReducer };