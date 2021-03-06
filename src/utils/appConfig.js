import axios from "axios";

const API_URL = "http://localhost:8080/";

const cleverAPI = {
  cleverReply: (input) => {
    return axios.post(`${API_URL}${input}`);
  },
};

export default cleverAPI;
