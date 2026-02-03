import { IoMenu } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaUserGear } from "react-icons/fa6";

import { useAppAuthHook } from "../../providers/hooks/useAppAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { Paths } from "../../constants/paths";

import { FaHome } from "react-icons/fa";
import { LuLayoutDashboard, LuCircleUserRound, LuUserRoundPlus } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
interface ButtonTemplateProps {
    icon?: React.ReactNode;
    label: string;
    forPath?: string;
    showLabel?: boolean;
    onClick?: () => void;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({ label, icon, forPath, showLabel = true, onClick }) => {
    const location = useLocation();

    const tooltipStyle = {
        desktop: "md:hidden absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-lg shadow-lg opacity-0 invisible z-[1000]",
        mobile: "group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[1000] pointer-events-none",
    }

    const highlightForPath = location.pathname === forPath ? "dark:bg-white/90 dark:text-gray-900 bg-gray-100 text-gray-900" : "dark:hover:bg-white/20 hover:bg-gray-800";

    return (
        <div className="relative group">
            <button
                type="button"
                className={`flex items-center gap-2 py-2 px-3 rounded-md font-semibold transition-all duration-300 ease-in-out cursor-pointer ${highlightForPath}`}
                onClick={onClick}
                disabled={location.pathname === forPath}>
                {icon}
                {showLabel && <span className="md:block hidden hover:underline hover:underline-offset-4">{label}</span>}
            </button>
            <div className={`${tooltipStyle.desktop} ${tooltipStyle.mobile}`}>
                {label}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>
        </div>
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
            <div id="header-nav" className="sticky z-1000 top-0 bg-gray-950/50 py-2 px-4 md:px-6 backdrop-blur-sm flex items-center justify-between">
                <div id="header-nav-left" className="flex items-center gap-2 md:gap-6">
                    <div id="header-nav-left-icon" className="flex items-center">
                        <IoMenu size={26} className="hover:text-gray-400 hover:cursor-pointer hover:translate-x-1 transition-all duration-300 ease-in-out" />
                    </div>
                    <div id="header-nav-left-menu" className="flex items-center gap-1 md:gap-3">
                        <ButtonTemplate
                            icon={<FaHome size={26} />}
                            label="Home"
                            forPath={Paths.Home}
                            onClick={() => navigate(Paths.Home)}
                        />
                        {currentUserInfo && (
                            <>
                                <ButtonTemplate
                                    icon={<LuLayoutDashboard size={26} />}
                                    label="Dashboard"
                                    forPath={Paths.Dashboard}
                                    onClick={() => navigate(Paths.Dashboard)}
                                />
                                <ButtonTemplate
                                    icon={<GrDocumentUser size={26} />}
                                    label="My CV"
                                    forPath={Paths.MyCv}
                                    onClick={() => navigate(Paths.MyCv)}
                                />
                            </>
                        )}
                        <ButtonTemplate
                            icon={<MdOutlineContactSupport size={26} />}
                            label="Contact"
                            forPath={Paths.Contact}
                            onClick={() => navigate(Paths.Contact)}
                        />
                    </div>
                </div>
                <div id="header-nav-right">
                    {currentUserInfo ? (
                        <div id="header-nav-right-logged-in" className="flex items-center md:gap-3">
                            <ButtonTemplate
                                icon={<FaUserGear size={26} />}
                                label="Settings"
                                showLabel={false}
                                forPath={Paths.Settings}
                                onClick={() => navigate(Paths.Settings)}
                            />
                            <ButtonTemplate
                                icon={<IoIosLogOut size={26} />}
                                label="Logout"
                                showLabel={false}
                                onClick={handleLogout}
                            />
                        </div>
                    ) : (
                        <div id="header-nav-right-logged-out" className="flex items-center md:gap-3">
                            <ButtonTemplate
                                icon={<LuCircleUserRound size={26} />}
                                label="Sign In"
                                forPath={Paths.Login}
                                onClick={() => navigate(Paths.Login)}
                            />
                            <ButtonTemplate
                                icon={<LuUserRoundPlus size={26} />}
                                label="Sign Up"
                                forPath={Paths.Register}
                                onClick={() => navigate(Paths.Register)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;