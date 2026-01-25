import type { TemplatePageProps } from "../../template.interface";

const AchievementParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    return (
        <>
            <p>{data?.cvName}</p>
        </>
    );
};

export default AchievementParagraph;