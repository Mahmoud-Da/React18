import axios, { CanceledError } from "axios";

// axiosの 設定しました
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { CanceledError };
