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
        return {
          ...state,
          registerStatus: action.registerStatus
        };
      case "OnSuccessRegister":
        return {
          ...state,
          responseStatus: true,
          responseMsg: "Thank You! Check Out the Webinar",
        };
      default:
        return { ...state };
    }
}
