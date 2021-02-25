import React, {useState, useEffect, useContext} from 'react';
import ClRegisterForm from './ClRegisterForm';
import CompleteProfileForm from './CompleteProfileForm';
import LsIntegrationContext from '../Contexts/LsIntegrationContext';

const FormLayout = () => {
  const {state, dispatch} = useContext(LsIntegrationContext);
  const [forms, setForms] = useState(false);
  useEffect(() => {
  console.log(state);
  }, [state]);
  return <>{state.lspaId === ''? <ClRegisterForm /> : <CompleteProfileForm />}</>;
}

export default FormLayout;
