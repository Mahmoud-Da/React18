import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // not needed in our endpoint
  // headers: {
  //   "api-key": "...."
  // }
});

export { CanceledError };
