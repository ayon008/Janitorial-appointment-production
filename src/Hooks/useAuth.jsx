import { AuthContext } from "@/app/Providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
    const authInfo = useContext(AuthContext);
    return authInfo;
};

export default useAuth;