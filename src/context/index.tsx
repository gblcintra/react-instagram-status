import { createContext, useContext, FunctionComponent, useEffect } from 'react';

import { useStoryReducer } from './reducer';
import { ContextProps, PhotoProps, StateProps } from '../interface';
import { photos } from '../utils';

interface ContextPropsItems extends StateProps {
   toggleModal(): void;
   handleSetItem: (item: PhotoProps) => void;
};

const StoryContext = createContext({} as ContextPropsItems);

const StoryContextProvider: FunctionComponent<ContextProps> = ({
   children
}) => {
   const [state, dispatchStory] = useStoryReducer();

   function toggleModal() {
      dispatchStory({ type: 'TOGGLE_MODAL' });
   }

   function handleSetItem(item: PhotoProps) {
      toggleModal();
      dispatchStory({
         type: 'SET_ITEM',
         payload: {
            item
         }
      });
   }

   useEffect(() => {
      dispatchStory({
         type: 'SET_PHOTOS',
         payload: {
            photos
         }
      });
   }, []);

   useEffect(() => {
      const { item } = state;
      console.log('CURRENT ITEM', { item });
   }, [state.item]);

   return (
      <StoryContext.Provider
         value={{
            ...state,
            toggleModal,
            handleSetItem
         }}
      >
         {children}
      </StoryContext.Provider>
   );
};

const useStory = () => useContext(StoryContext);

export { StoryContextProvider, useStory };