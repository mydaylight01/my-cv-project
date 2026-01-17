import { useEffect } from "react";
import { ErrorManager } from "../../utils/ErrorManager";
import { useLocation } from "react-router-dom";

const ScrollTop: React.FC = () => {
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
};

export default ScrollTop;