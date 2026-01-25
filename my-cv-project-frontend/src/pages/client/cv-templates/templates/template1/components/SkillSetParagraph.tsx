import type { TemplatePageProps } from "../../template.interface";

const SkillSetParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    return (
        <>
            <p>{data?.cvName}</p>
        </>
    );
};

export default SkillSetParagraph;