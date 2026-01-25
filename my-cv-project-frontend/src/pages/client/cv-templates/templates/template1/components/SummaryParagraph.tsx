import type { TemplatePageProps } from "../../template.interface";

const SummaryParagraph: React.FC<TemplatePageProps> = ({ data }) => {
    return (
        <>
            <div className="flex item-center justify-center py-8 px-10 bg-gray-800">
                <div className="flex flex-col flex-wrap gap-3">
                    {data?.summary?.map((item, index) => {
                        if (item?.isBlank) return <br key={index} />;
                        return <p key={index} className="max-w-[1440px]">&nbsp;&nbsp;&nbsp;{`${item?.content}`}</p>;
                    })}
                </div>
            </div>
        </>
    );
};

export default SummaryParagraph;