import { useEffect } from "react";
import { ErrorManager } from "./ErrorManager";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        try {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        } catch (error: unknown) {
            ErrorManager(error);
        }
    }, [pathname]);

    return null;
}