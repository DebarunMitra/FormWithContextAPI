import { v4 as uuidv4 } from "uuid";
//uuidv4();

const getCampaignDetails = (paramKeyValue) => {
  if (window.location.href.split("?")[1]) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramKeyValue);
  } else {
    return "";
  }
};

export const registerUserInLs = async (name, email, phone, activityCode) => {
 console.log(`${uuidv4()} ${name} ${email} ${phone} ${activityCode}`); 
};
