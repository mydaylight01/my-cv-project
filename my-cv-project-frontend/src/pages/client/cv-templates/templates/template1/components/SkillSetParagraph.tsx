import React, { useMemo } from "react";
import type { Skills, SkillSet } from "../../../../../../services/model/mockup.model";
import type { TemplatePageProps } from "../../template.interface";

const SIDE: { LEFT: string; RIGHT: string } = {
    LEFT: "L",
    RIGHT: "R",
}

const SkillSetParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    const skillSetLeftSide = useMemo(() => data?.skillSet?.filter((item: SkillSet) => item?.paragraphSide == SIDE.LEFT).sort((item: SkillSet) => item?.sequence), [data]);
    const skillSetRightSide = useMemo(() => data?.skillSet?.filter((item: SkillSet) => item?.paragraphSide == SIDE.RIGHT).sort((item: SkillSet) => item?.sequence), [data]);

    const renderSkillSet = (skillSet: SkillSet[], side: string) => {
        return skillSet?.map((item: SkillSet, skillSetIndex: number) => (
            <div key={`${side}_skillset_${skillSetIndex}`} className="flex flex-col">
                <span className="text-lg font-bold pb-2 pt-6">{item?.skillSetName}</span>

                <div className="flex flex-col">
                    {item?.skills?.map((skill: Skills, skillIndex: number) => (
                        <div
                            key={`${side}_skill_${skillSetIndex}_${skillIndex}`}
                            className={`flex flex-row text-sm md:text-base ${skill?.isHighlight ? "font-bold" : ""}`}
                        >
                            &nbsp;&nbsp;
                            <li>{skill?.skillContent}</li>
                        </div>
                    ))}
                </div>
            </div>
        ));
    };


    return (
        <>
            <div className="flex flex-col px-8 py-8 min-h-[400px]">
                <div className="flex flex-col font-bold items-center justify-center pt-0 md:pt-4">
                    <span className="text-xl md:text-2xl">Skills</span>
                    <hr className="w-3/4 sm:w-3/5 md:w-1/2 border-0.5 md:border-1 border-white mt-4" />
                </div>
                <div className="flex flex-col items-center justify-evenly">
                    <div className="flex flex-col md:flex-row items-start justify-evenly size-fit md:w-full">
                        <div className="flex flex-col">
                            {/* Left Side */}
                            {renderSkillSet(skillSetLeftSide, SIDE.LEFT)}
                        </div>
                        <div className="flex flex-col">
                            {/* Right Side */}
                            {renderSkillSet(skillSetRightSide, SIDE.RIGHT)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillSetParagraph;