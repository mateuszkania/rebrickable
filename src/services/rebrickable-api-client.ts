import axios, { AxiosInstance } from "axios";

const apiKey: string = process.env.REACT_APP_REBRICKABLE_API_KEY || "";

const rebrickableApiClient: AxiosInstance = axios.create({
  baseURL: "https://rebrickable.com/api/v3/",
  params: {
    key: apiKey,
  },
});

export default rebrickableApiClient;
