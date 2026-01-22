import { useNavigate } from "react-router-dom";
import { Paths } from "../constants/paths";

import { IoCaretBack, IoCaretForward } from "react-icons/io5";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const styles: Record<string, string> = {
        screen: `h-screen w-screen flex flex-col items-center justify-center text-white gap-2`,
        message: `font-mono font-semibold drop-shadow-2xl`,
        buttonGroup: `flex flex-row gap-10 mt-5`,
        button: `bg-indigo-500 cursor-pointer drop-shadow-2xl duration-300 ease-in-out flex font-mono font-semibold gap-2 hover:bg-indigo-600 items-center justify-center md:px-6 md:text-lg px-3 py-2 rounded-full shadow-lg text-md text-white transition-all hover:-translate-y-1 hover:shadow-indigo-500/50`,
    };

    const onNavigateToHome = () => {
        navigate(Paths.Home);
    };

    return (
        <div className={styles.screen}>
            <h1 className={`md:text-[6rem] text-[4rem] ${styles.message}`}>404</h1>
            <span className={`md:text-3xl text-xl ${styles.message}`}>Page Not Found!</span>
            <div className={styles.buttonGroup}>
                <button onClick={onNavigateToHome} className={styles.button}><IoCaretForward size={20} /> Home <IoCaretBack size={20} /></button>
            </div>
        </div>
    );
};

export default NotFound;