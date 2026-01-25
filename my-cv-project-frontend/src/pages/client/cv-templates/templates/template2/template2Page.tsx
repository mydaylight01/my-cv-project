import { useEffect } from "react";

import type { TemplatePageProps } from "../template.interface";

const Template2Page: React.FC<TemplatePageProps> = ({ data }) => {

    useEffect(() => {
        console.log("[Template 2][Start] data", data);
    }, [data]);

    return (
        <>
            <p>{data?.cvName}</p>
        </>
    );
};

export default Template2Page;