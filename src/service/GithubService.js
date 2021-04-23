import axios from "axios";
axios.defaults.baseURL = "https://api.github.com/";

export default {
    searchUser(params) {
        return axios.get("users/" + params);
    },
};
