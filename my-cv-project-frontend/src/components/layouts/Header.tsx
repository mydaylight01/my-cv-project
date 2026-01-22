import { IoMenu } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaUserGear } from "react-icons/fa6";

import { useAppAuthHook } from "../../providers/hooks/useAppAuth";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constants/paths";

const ButtonTemplate: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => {
    return (
        <button
            type="button"
            className="hover:bg-white/20 py-2 px-4 rounded-md font-semibold transition-all duration-300 ease-in-out cursor-pointer"
            onClick={onClick}>{label}</button>
    );
};

const Header: React.FC = () => {
    const { currentUserInfo, appLogout } = useAppAuthHook();

    const navigate = useNavigate();

    const handleRoute = (route?: string) => {
        try {
            console.log("[Header][handleRoute][Start] > Navigating to: ", route);
            if (!route) return;

            navigate(route);
        } catch (error) {
            console.error("[Header][handleRoute][Error] > Failed to navigate to the specified route");
            throw error;
        } finally {
            console.log("[Header][handleRoute][Done]");
        }
    }

    const handleLogout = () => {
        try {
            console.log("[Header][handleLogout][Start] > Logging out");
            appLogout();
            navigate(Paths.Login);
        } catch (error) {
            console.error("[Header][handleLogout][Error] > Failed to logout");
            throw error;
        } finally {
            console.log("[Header][handleLogout][Done]");
        }
    }

    return (
        <>
            <div id="header-nav" className="relative sticky bg-gray-950/50 py-2 px-6 backdrop-blur-sm flex items-center justify-between">
                <div id="header-nav-left" className="flex items-center gap-6">
                    <div id="header-nav-left-icon" className="flex items-center">
                        <IoMenu size={28} className="hover:text-gray-400 hover:cursor-pointer hover:translate-x-1 transition-all duration-300 ease-in-out" />
                    </div>
                    <div id="header-nav-left-menu" className="flex items-center gap-3">
                        <ButtonTemplate label="Home" onClick={() => handleRoute(Paths.Home)} />
                        {currentUserInfo && (
                            <>
                                <ButtonTemplate label="Dashboard" onClick={() => handleRoute(Paths.Dashboard)} />
                                <ButtonTemplate label="My CV" onClick={() => handleRoute(Paths.MyCv)} />
                            </>
                        )}
                        <ButtonTemplate label="Contact" onClick={() => handleRoute(Paths.Contact)} />
                    </div>
                </div>
                <div id="header-nav-right">
                    {currentUserInfo ? (
                        <div id="header-nav-right-logged-in" className="flex items-center gap-6">
                            <FaUserGear size={28} className="hover:text-gray-400 hover:cursor-pointer" />
                            <IoIosLogOut size={28} className="hover:text-gray-400 hover:cursor-pointer hover:translate-x-1 transition-all duration-300 ease-in-out" onClick={handleLogout} />
                        </div>
                    ) : (
                        <div id="header-nav-right-logged-out" className="flex items-center gap-3">
                            <ButtonTemplate label="Login" onClick={() => handleRoute(Paths.Login)} />
                            <ButtonTemplate label="Register" onClick={() => handleRoute(Paths.Register)} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;