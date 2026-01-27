import { Blank } from "../../../components";
import { Template1Page } from "./templates";

import type { MyCvData } from "../../../services/model/mockup.model";

interface TemplateManagerProps {
    templateCode: string;
    data: MyCvData;
}

const TemplateManager: React.FC<TemplateManagerProps> = ({
    templateCode,
    data
}) => {
    const renderTemplate = (templateCode: string, data: MyCvData) => {
        console.log("[TemplateManager][renderTemplate][Start] templateCode", templateCode);
        const cvData = data?.personalCv;

        switch (templateCode) {
            case "template1":
                console.log("[TemplateManager][renderTemplate][End] template1");
                return <Template1Page data={cvData} />
            default:
                console.log("[TemplateManager][renderTemplate][End] unknown templateCode");
                return <Blank />;
        }
    }

    if (!templateCode) return <Blank />;
    return (
        <>
            {renderTemplate(templateCode, data)}
        </>
    );
};

export default TemplateManager;