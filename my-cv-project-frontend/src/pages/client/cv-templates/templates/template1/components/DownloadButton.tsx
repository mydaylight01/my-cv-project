import { FaDownload } from "react-icons/fa";

import type { PersonalCv } from "../../../../../../services/model/mockup.model";

interface DownloadButtonProps {
    data: PersonalCv;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ data }) => {
    if (!data?.downloadLink) return null;

    return (
        <a
            href={data?.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-25 right-10 z-1500"
        >
            <button className="flex flex-row items-center gap-x-2 rounded-md p-2 px-4 font-semibold text-sm md:text-base text-shadow-lg/10 hover:text-gray-300 bg-gray-900 hover:bg-gray-900/80 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
                <FaDownload size={16} />
                Download CV
            </button>
        </a>
    );
};

export default DownloadButton;