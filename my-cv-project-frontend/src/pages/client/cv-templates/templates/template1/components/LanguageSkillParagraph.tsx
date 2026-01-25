import type { TemplatePageProps } from "../../template.interface";

const LanguageSkillParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    return (
        <>
            <p>{data?.cvName}</p>
        </>
    );
};

export default LanguageSkillParagraph;