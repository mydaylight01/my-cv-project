import { useEffect } from "react";
import type { TemplatePageProps } from "../template.interface";
import {
    GreetingsParagraph,
    SummaryParagraph,
    WorkExperienceParagraph,
    SkillSetParagraph,
    AchievementParagraph,
    // LanguageSkillParagraph,
    // EducationExperienceParagraph,
} from "./components";

const Template1Page: React.FC<TemplatePageProps> = ({ data }) => {

    useEffect(() => {
        console.log("[Template 1][Start] data", data);
    }, [data]);

    return (
        <>
            <div className="flex flex-col">
                <GreetingsParagraph data={data} />
                <SummaryParagraph data={data} />
                <SkillSetParagraph data={data} />
                <WorkExperienceParagraph data={data} />
                <AchievementParagraph data={data} />
                {/* <LanguageSkillParagraph data={data} /> */}
                {/* <EducationExperienceParagraph data={data} /> */}
            </div>
        </>
    );
};

export default Template1Page;