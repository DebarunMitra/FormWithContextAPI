import axios from 'axios';
import {CreateCustom} from "./LsApiLibrary";

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
  const payload = {
    LeadDetails: [
      {
        Attribute: "EmailAddress",
        Value: email,
      },
      {
        Attribute: "Phone",
        Value: phone,
      },
      {
        Attribute: "FirstName",
        Value: name,
      },
      {
        Attribute: "Source",
        Value: getCampaignDetails("source"),
      },
      {
        Attribute: "mx_Source_Campaign_Id",
        Value: getCampaignDetails("utm_source-campaign"),
      },
      {
        Attribute: "SearchBy",
        Value: "Phone",
      },
    ],
    Activity: {
      ActivityEvent: activityCode,
      ActivityNote: "User Registration",
    },
  };

  console.log(payload);
  const apiResponse = await axios.post(CreateCustom, payload);
  console.log(apiResponse);
  return apiResponse.data;
};
