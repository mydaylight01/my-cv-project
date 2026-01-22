import { useEffect } from "react";
import { ErrorMessageController } from "../../utils/ErrorMessageController";
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
            ErrorMessageController("ScrollTop", "useEffect", error);
            throw error;
        }
    }, [pathname]);

    return null;
};

export default ScrollTop;