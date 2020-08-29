import {registerUserInLs} from "../LsApiProvider/LsApiManager";

export const LsReducer = (state, action) => {
    switch (action.type) {
      case "CaptureInputs":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "CaptureChecked":
        return {
          ...state,
          [action.field]: action.checked,
        };
      case "Registering":
        state.registerStatus = action.registerStatus;
        registerUserInLs(
          state.name,
          state.email,
          state.phone,
          action.activityCode
        );
         return {
           ...state,
           responseStatus: true,
           responseMsg: "Thank You! Check Out the Webinar",
         };
      default:
        return { ...state };
    }
}
