import { useNavigate } from "react-router-dom";
import Paths from "../layouts/paths";

import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { FaFlushed } from "react-icons/fa";

const ErrorElement: React.FC = () => {
    const navigate = useNavigate();

    const styles: Record<string, string> = {
        screen: `flex flex-col items-center justify-center text-white gap-2`,
        message: `font-mono font-semibold drop-shadow-2xl`,
        buttonGroup: `flex flex-row gap-10 mt-5`,
        button: `bg-indigo-500 cursor-pointer drop-shadow-2xl duration-300 ease-in-out flex font-mono font-semibold gap-2 hover:bg-indigo-600 items-center justify-center md:px-6 md:text-lg px-3 py-2 rounded-full shadow-lg text-md text-white transition-all hover:-translate-y-1 hover:shadow-indigo-500/50`,
    };

    return (
        <div className={styles.screen}>
            <h1 className={`md:text-[6rem] text-[4rem] ${styles.message}`}>Oops!</h1>
            <span className={`md:text-3xl text-xl ${styles.message}`}>Something went wrong</span>
            <span className={`md:text-2xl text-lg ${styles.message}`}>Please try again later, or contact support</span>
            <div className={styles.buttonGroup}>
                <button onClick={() => navigate(Paths.Home)} className={styles.button}><IoCaretForward size={20} /> Home <IoCaretBack size={20} /></button>
                <button onClick={() => navigate(Paths.Contact)} className={styles.button}>Contact<FaFlushed size={20} /></button>
            </div>
        </div>
    );
};

export default ErrorElement;