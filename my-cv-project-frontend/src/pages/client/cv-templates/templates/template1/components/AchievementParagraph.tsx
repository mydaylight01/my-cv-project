import type { TemplatePageProps } from "../../template.interface";

import type { Achievement } from "../../../../../../services/model/mockup.model";

const AchievementParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    const renderDateWithFormat = (date: Date | null) => {
        try {
            if (!date) return "";

            return new Intl.DateTimeFormat("en-US", {
                month: "long",
                year: "numeric",
            }).format(date);
        } catch (error) {
            console.error("[AchievementParagraph][renderDateWithFormat][Error] formatting date:", error);
            return "";
        }
    }

    return (
        <div className="flex flex-col items-center justify-center py-10 w-full bg-[#1A1A1A] text-white">
            <div className="w-full flex flex-col font-bold items-center justify-center mb-8">
                <span className="text-2xl md:text-3xl text-shadow-lg/20 font-kanit">Achievements</span>
                <hr className="w-9/10 sm:w-4/5 md:w-2/3 border-1 border-white mt-4 mb-2 opacity-50" />
            </div>

            <div className="flex flex-wrap justify-center gap-6 w-full px-4 md:px-10 max-w-[1440px]">
                {data?.achievements?.map((achievement: Achievement, index: number) => (
                    <div
                        key={`achievement_${index}`}
                        className="
                            flex flex-col justify-between 
                            w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)]
                            bg-[#2A2A2A] p-6 rounded-xl border border-white/10
                            hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out
                            group relative overflow-hidden
                        "
                    >
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold font-kanit text-blue-300 drop-shadow-md group-hover:text-blue-200 transition-colors">
                                {achievement?.achievementName}
                            </h3>
                            <p className="text-sm text-gray-400 font-kanit italic">
                                {achievement?.achievementDate ? renderDateWithFormat(achievement.achievementDate) : ""}
                            </p>
                            <p className="text-base text-gray-300 font-kanit mt-2 leading-relaxed">
                                {achievement?.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementParagraph;