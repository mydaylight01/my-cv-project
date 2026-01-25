import type { TemplatePageProps } from "../../template.interface";

const WorkExperienceParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    return (
        <>
            <p>{data?.cvName}</p>
        </>
    );
};

export default WorkExperienceParagraph;