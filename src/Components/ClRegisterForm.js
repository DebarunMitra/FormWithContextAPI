import React, {useContext} from 'react';
import LsIntegrationContext from '../Contexts/LsIntegrationContext';
import { registerUserInLs } from "../LsApiProvider/LsApiManager";

const ClRegisterForm = (props) =>{
  const {formState, formDispatch} = useContext(LsIntegrationContext);
  
  const handleInputs = (e) => {
    formDispatch({
      type: "CaptureInputs",
      field: e.target.name,
      value: e.target.value
    });
  }

  const handleChecked = (e) =>{
    formDispatch({
      type: "CaptureChecked",
      field: e.target.name,
      checked: e.target.checked,
    });
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    if (formState.privacyPolicy===true && formState.phone!=='') {
       formDispatch({
         type: "Registering",
         registerStatus: true,
       });
        registerUserInLs(
          formState.name,
          formState.email,
          formState.phone,
          props.pageCode
        );
        setTimeout(() => {
          formDispatch({
            type: "OnSuccessRegister",
          });
        }, 1000);
    }
  }
  return (
    <div id="pap-form-1" className="wrap" style={{ display: "block" }}>
      <h3 className="heading">Want more details? Contact us!</h3>
      {formState.responseStatus ? (
        <p className="heading">{formState.responseMsg}</p>
      ) : (
        <form
          onSubmit={(e) => handleOnSubmit(e)}
          data-page-code={props.pageCode}
        >
          <label htmlFor="name">Name*:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={(e) => handleInputs(e)}
            required
          />
          <label htmlFor="email">Email ID*:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={(e) => handleInputs(e)}
            required
          />
          <label htmlFor="phone">Phone Number*:</label>
          <input
            type="tel"
            name="phone"
            pattern="^\d{10}$"
            value={formState.phone}
            onChange={(e) => handleInputs(e)}
            required
          />
          <input
            type="checkbox"
            name="privacyPolicy"
            value={formState.privacyPolicy}
            onChange={(e) => handleChecked(e)}
            required
          />
          <label htmlFor="privacy" id="privacy1">
            By providing your contact details, you agree to our{" "}
            <a
              href="https://products.thecareerlabs.com/privacy-policy/"
              target="blank"
            >
              Privacy Policy
            </a>
          </label>
          <input
            id="form-btn-1"
            type="submit"
            style={{ opacity: formState.registerStatus ? "0.3" : "0.8" }}
            disabled={formState.registerStatus ? true : false}
            value={formState.registerStatus ? "Registering..." : "Register"}
          />
        </form>
      )}
    </div>
  );
}

export default ClRegisterForm;
