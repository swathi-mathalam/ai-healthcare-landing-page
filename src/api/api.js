import axios from "axios";

const API_URL =
  "https://6a2107e4b1d0aaf32b4e9ec3.mockapi.io/landing-content";

export const getLandingContent = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};