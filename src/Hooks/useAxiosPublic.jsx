import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://clean-job-backend-final.vercel.app/',
    });
    return instance;
};

export default useAxiosPublic;