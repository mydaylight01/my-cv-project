import { Fragment, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { FaCopy, FaCheckCircle } from "react-icons/fa";

import type { Contact, ParagraphBgImg } from "../../../../../../services/model/mockup.model";
import type { TemplatePageProps } from "../../template.interface";
import { socialIconMap } from "../../../../../../components/utils/SocialIconMapper";
import type { SocialIcon } from "../../../../../../constants/social";

const GreetingsParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    const [copyStatusMap, setCopyStatusMap] = useState<{ [key: string]: boolean }>({});

    const paragraphBackground: ParagraphBgImg | undefined = useMemo(() => {
        try {
            // console.log("[Template 1][GreetingsParagraph][Start] data?.paragraphBgImg:", data?.paragraphBgImg);

            const result = data?.paragraphBgImg?.find((item) => item?.paragraphName === "greetings");
            // console.log("[Template 1][GreetingsParagraph] result:", result);
            if (!result) {
                console.warn("[Template 1][GreetingsParagraph][End] result is undefined");
                return undefined;
            };

            // console.log("[Template 1][GreetingsParagraph][End] result", result);
            return result;
        } catch (error) {
            console.error("[Template 1][GreetingsParagraph][Error] error:", error);
            return undefined;
        }
    }, [data]);

    const blurLevel = (): string => {
        const blurLevel = paragraphBackground?.blurLevel;
        if (!blurLevel) return "";

        switch (blurLevel) {
            case "xs":
                return "blur-xs";
            case "sm":
                return "blur-sm";
            case "md":
                return "blur-md";
            case "lg":
                return "blur-lg";
            default:
                return "";
        }
    };

    const displayIcon = (icon: SocialIcon, size: number = 24): React.ReactNode => {
        try {
            // console.log("[Template 1][GreetingsParagraph][Start] icon:", icon);

            const result = socialIconMap(size)[icon];
            // console.log("[Template 1][GreetingsParagraph] result:", result);

            if (!result) {
                console.warn("[Template 1][GreetingsParagraph][End] result is undefined");
                return <></>;
            };

            // console.log("[Template 1][GreetingsParagraph][End] result", result);
            return result;
        } catch (error) {
            console.error("[Template 1][GreetingsParagraph][Error] error:", error);
            return <></>;
        }
    };

    const copyToClipboard = (item: Contact) => {
        try {
            if (copyStatusMap[item?.contactTypeName]) return;

            navigator.clipboard.writeText(item?.contactInfo.trim());
            setCopyStatusMap((prev) => ({ ...prev, [item?.contactTypeName]: true }));

            toast.success("Copied to clipboard");

            setTimeout(() => {
                setCopyStatusMap((prev) => ({ ...prev, [item?.contactTypeName]: false }));
            }, 2000);
        } catch (error) {
            console.error("[Template 1][GreetingsParagraph][Error] error:", error);
        }
    };

    const checkCopyStatus = (item: Contact): boolean => {
        try {
            const result: boolean = copyStatusMap[item?.contactTypeName] || false;

            return result;
        } catch (error) {
            console.error("[Template 1][GreetingsParagraph][Error] error:", error);
            return false;
        }
    };

    const flipCard = ({ imageUrl, imageUrlFlip }: { imageUrl: string, imageUrlFlip: string }) => {
        return (
            <>
                <div className="group [perspective:1000px] w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Front */}
                        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden shadow-xl shadow-gray-950/30 absolute inset-0 [backface-visibility:hidden]">
                            <img src={imageUrl} className="w-full h-full object-cover" alt="profile" />
                        </div>

                        {/* Back */}
                        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden shadow-xl shadow-gray-950/30 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <img src={imageUrlFlip} className="w-full h-full object-cover hover:scale-110 hover:rotate-3 hover:translate-y-[-10px] transition-all duration-500 ease-in-out" alt="profile" />
                        </div>
                    </div>
                </div>
            </>
        )
    };

    const renderContactItem = (item: Contact) => {
        let renderedItem: React.ReactNode;

        switch (item.contactTypeName) {
            case "Phone":
                renderedItem = (
                    <Fragment>
                        <a href={`tel:${item?.link}`} target="_blank" rel="noopener noreferrer" className="block md:hidden font-semibold text-blue-300 hover:underline hover:underline-offset-4 text-sm md:text-base">{item?.contactInfo}</a>
                        <div className="hidden md:flex flex-row items-center gap-x-2 font-semibold text-sm md:text-base">
                            {item?.contactInfo}
                            <span
                                id={`copy-${item?.contactTypeName}-${item?.sequence}`}
                                className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out text-xs md:text-base"
                                onClick={() => copyToClipboard(item)}>
                                {checkCopyStatus(item) ? <FaCheckCircle size={16} /> : <FaCopy size={16} />}
                            </span>
                        </div>
                    </Fragment>
                )
                break;
            default:
                if (item?.link) {
                    renderedItem = (
                        <a href={`${item?.link}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-300 hover:underline hover:underline-offset-4 text-sm md:text-base">{item?.contactInfo}</a>
                    )
                } else {
                    renderedItem = (
                        <div className="flex flex-row items-center gap-x-2 font-semibold text-sm md:text-base">
                            {item?.contactInfo}
                            <span
                                id={`copy-${item?.contactTypeName}-${item?.sequence}`}
                                className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out text-xs md:text-base"
                                onClick={() => copyToClipboard(item)}>
                                {checkCopyStatus(item) ? <FaCheckCircle size={16} /> : <FaCopy size={16} />}
                            </span>
                        </div>
                    )
                }
                break;
        }

        return renderedItem;
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center relative w-full h-full min-h-[650px] md:min-h-[600px] overflow-hidden">
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${blurLevel()}`}
                    style={{ backgroundImage: `url(${paragraphBackground?.imageUrl})` }}
                />

                {/* render for desktop */}
                <div className="hidden md:flex h-full relative z-10 flex-col items-center justify-center py-10">
                    <div className="flex flex-row w-full items-center justify-between gap-6 px-10 md:px-20 lg:px-40 xl:px-60 max-w-[1920px]">
                        <div className="flex-1 min-w-0 h-full flex flex-col items-start justify-between py-8 min-h-[300px]">
                            <div className="flex flex-col gap-1">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">{`${data?.titleName}${data?.firstName} ${data?.lastName}`}</div>
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold">{data?.jobPosition}</div>
                            </div>
                            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
                                {
                                    data?.contact?.map((item: Contact, index: number) => (
                                        <div key={index} className="flex overflow-wrap break-words items-center gap-x-3">
                                            <div className="flex items-center justify-center">
                                                {displayIcon(item?.icon)}
                                            </div>
                                            {renderContactItem(item)}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="h-full flex items-center justify-center">
                            {flipCard({
                                imageUrl: data?.imageUrl,
                                imageUrlFlip: data?.imageUrlFlip
                            })}
                        </div>
                    </div>
                </div>

                {/* render for mobile */}
                <div className="flex md:hidden h-full relative z-10 flex-col items-center justify-center py-10">
                    <div className="flex flex-col w-full items-center justify-center">
                        <div className="h-full flex items-center justify-center">
                            {flipCard({
                                imageUrl: data?.imageUrl,
                                imageUrlFlip: data?.imageUrlFlip
                            })}
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col py-8">
                            <div className="flex flex-col items-center gap-1">
                                <div className="text-3xl font-bold">{`${data?.titleName}${data?.firstName} ${data?.lastName}`}</div>
                                <div className="text-2xl font-bold">{data?.jobPosition}</div>
                            </div>
                            <div className="flex flex-col px-3 gap-y-3 mt-10">
                                {
                                    data?.contact?.map((item: Contact, index: number) => (
                                        <div key={index} className="flex overflow-wrap break-words items-center gap-x-3">
                                            <div className="flex items-center justify-center">
                                                {displayIcon(item?.icon, 20)}
                                            </div>
                                            {renderContactItem(item)}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default GreetingsParagraph;