import React, {useReducer} from 'react';

import {LsReducer} from '../Reducers/LsReducers';
import LsIntegrationContext from './LsIntegrationContext';
import {formInitialState} from './Store';

const LsIntegrationContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(LsReducer, formInitialState);
  return (
    <LsIntegrationContext.Provider value={{formState: state, formDispatch: dispatch}}>
      {children}
    </LsIntegrationContext.Provider>
  );
}

export default LsIntegrationContextProvider;
