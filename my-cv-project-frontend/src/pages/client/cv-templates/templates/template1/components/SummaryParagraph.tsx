import type { TemplatePageProps } from "../../template.interface";

const SummaryParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    return (
        <>
            <p>{data?.cvName}</p>
        </>
    );
};

export default SummaryParagraph;