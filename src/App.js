import React from 'react';
import LsIntegrationContextProvider from './Contexts/LsIntegrationContextProvider';
import ClRegisterForm from "./Components/ClRegisterForm";
import './App.css';

const App = () => {
  return (
    <>
      <LsIntegrationContextProvider>
        <ClRegisterForm pageCode="290" />
      </LsIntegrationContextProvider>
    </>
  );
}

export default App;
