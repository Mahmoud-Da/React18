import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "23ef3ad14f1546e681fe5765e549af13",
  },
});
