import { IoMenu } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaUserGear } from "react-icons/fa6";

import { useAppAuthHook } from "../../providers/hooks/useAppAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { Paths } from "../../constants/paths";

interface ButtonTemplateProps {
    label: string;
    path: string;
    pathParams?: string;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({ label, path, pathParams }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleRoute = () => {
        try {
            console.log("[Header][handleRoute][Start] > Navigating to: ", path);
            if (!path) return;

            navigate(path, { state: pathParams });
        } catch (error) {
            console.error("[Header][handleRoute][Error] > Failed to navigate to the specified route");
            throw error;
        } finally {
            console.log("[Header][handleRoute][Done]");
        }
    }

    return (
        <button
            type="button"
            className="hover:bg-white/20 py-2 px-4 rounded-md font-semibold transition-all duration-300 ease-in-out cursor-pointer"
            onClick={handleRoute}
            disabled={location.pathname === path}>{label}</button>
    );
};

const Header: React.FC = () => {
    const { currentUserInfo, appLogout } = useAppAuthHook();
    const navigate = useNavigate();

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
                        <ButtonTemplate
                            label="Home"
                            path={Paths.Home}
                        />
                        {currentUserInfo && (
                            <>
                                <ButtonTemplate
                                    label="Dashboard"
                                    path={Paths.Dashboard}
                                />
                                <ButtonTemplate
                                    label="My CV"
                                    path={Paths.MyCv}
                                />
                            </>
                        )}
                        <ButtonTemplate
                            label="Contact"
                            path={Paths.Contact}
                        />
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
                            <ButtonTemplate
                                label="Login"
                                path={Paths.Login}
                            />
                            <ButtonTemplate
                                label="Register"
                                path={Paths.Register}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;