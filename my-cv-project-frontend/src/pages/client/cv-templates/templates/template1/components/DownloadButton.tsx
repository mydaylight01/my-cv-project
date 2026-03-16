import { FaDownload } from "react-icons/fa";

import type { PersonalCv } from "../../../../../../services/model/mockup.model";

interface DownloadButtonProps {
    data: PersonalCv;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ data }) => {
    if (!data?.downloadLink) return null;

    const tooltipStyle = {
        desktop: "md:hidden absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-lg shadow-lg opacity-0 invisible z-[1000]",
        mobile: "group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[1000] pointer-events-none",
    }

    return (
        <div className="relative group">
            <a
                href={data?.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed top-22 right-10 z-1500"
            >
                <button className="flex flex-row items-center gap-x-2 rounded-md p-2 px-4 font-semibold text-sm md:text-base text-shadow-lg/10 hover:text-gray-300 bg-gray-900 hover:bg-gray-900/80 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
                    <FaDownload size={16} />
                    <span className="hidden md:block py-1 md:py-0">Download CV</span>
                </button>

                <div className={`${tooltipStyle.desktop} ${tooltipStyle.mobile}`}>
                    Download CV
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
            </a>
        </div>
    );
};

export default DownloadButton;