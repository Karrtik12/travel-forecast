import axios from "axios";

// import { demoResponse } from "./demoResponse";

export const getPlacesData = async (type, sw, ne) => {
  try {
    var response = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    const {
      data: { data },
    } = response;
    return data;
  } catch (error) {
    const status = error.response.status;
    if (status === 429) {
      alert(
        "Rapid API quota limit exceeded. Please try again after some time."
      );
    }
  }
};
