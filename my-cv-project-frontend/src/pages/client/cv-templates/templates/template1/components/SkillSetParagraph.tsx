import React, { useMemo } from "react";
import type { Skills, SkillSet } from "../../../../../../services/model/mockup.model";
import type { TemplatePageProps } from "../../template.interface";

const SkillSetParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    const skillSetLeftSide = useMemo(() => data?.skillSet?.filter((item: SkillSet) => item?.paragraphSide == "L").sort((item: SkillSet) => item?.sequence), [data]);
    const skillSetRightSide = useMemo(() => data?.skillSet?.filter((item: SkillSet) => item?.paragraphSide == "R").sort((item: SkillSet) => item?.sequence), [data]);

    const renderSkillSet = (skillSet: SkillSet[], side: string) => {
        return skillSet?.map((item: SkillSet, skillSetIndex: number) => (
            <React.Fragment key={`${side}_skillset_${skillSetIndex}`}>
                <p>{item?.skillSetName}</p>

                <div className="flex flex-col mb-8">
                    {item?.skills?.map((skill: Skills, skillIndex: number) => (
                        <div
                            key={`${side}_skill_${skillSetIndex}_${skillIndex}`}
                            className={`flex flex-row ${skill?.isHighlight ? "font-bold" : ""}`}
                        >
                            &nbsp;&nbsp;
                            <li>{skill?.skillContent}</li>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        ));
    };


    return (
        <>
            <div className="flex flex-col px-10 py-10 min-h-[400px]">
                <div className="flex flex-col text-2xl font-bold items-center justify-center py-6">
                    <span>Skills</span>
                    <hr className="w-3/4 sm:w-3/5 md:w-1/2 border-1 border-white mt-4" />
                </div>
                <div className="flex flex-col md:flex-row items-start justify-evenly">
                    <div className="flex flex-col">
                        {/* Left Side */}
                        {renderSkillSet(skillSetLeftSide, "L")}
                    </div>
                    <div className="flex flex-col">
                        {/* Right Side */}
                        {renderSkillSet(skillSetRightSide, "R")}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillSetParagraph;