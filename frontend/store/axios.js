import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://internship-3u1y.onrender.com/api/v1",
    withCredentials: true,
})

export default axiosInstance;
