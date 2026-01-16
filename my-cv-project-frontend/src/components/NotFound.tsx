import { useNavigate } from "react-router-dom";
import Paths from "../layouts/paths";

const ErrorElement: React.FC = () => {

    const navigate = useNavigate();

    const base = {
        flexCenter: "flex items-center justify-center",
        flexCol: "flex flex-col",
        fontMono: "font-mono font-semibold",
        fontNoto: "font-noto font-semibold",
        transition: "transition-all duration-300 ease-in-out",
        shadow: "drop-shadow-2xl shadow-lg"
    }

    const styles = {
        screen: `h-screen w-screen ${base.flexCol} ${base.flexCenter} bg-gray-900 text-white gap-2`,
        message: `${base.fontMono} drop-shadow-2xl`,
        buttonGroup: `flex flex-row gap-10 mt-5`,
        button: `${base.fontNoto} ${base.flexCenter} bg-indigo-500 text-white md:px-8 px-3 py-2 rounded-md md:text-lg text-md hover:bg-indigo-600 ${base.transition} ${base.shadow} cursor-pointer`,
    }

    return (
        <div className={styles.screen}>
            <h1 className={`md:text-[6rem] text-[4rem] ${styles.message}`}>404</h1>
            <span className={`md:text-3xl text-xl ${styles.message}`}>Page Not Found!</span>
            <div className={styles.buttonGroup}>
                <button onClick={() => navigate(Paths.Home)} className={styles.button}>Home</button>
                <button onClick={() => navigate(Paths.Contact)} className={styles.button}>Contact</button>
            </div>
        </div>
    );
}

export default ErrorElement;