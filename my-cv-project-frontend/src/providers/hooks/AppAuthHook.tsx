import { useContext } from "react";
import AppAuthContext from "../contexts/AppAuthContext";

export const useAppAuthHook = () => {
    return useContext(AppAuthContext);
};