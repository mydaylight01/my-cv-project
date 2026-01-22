import type { MyCvData } from "../../../services/model/mockup.model";

interface TemplateManagerProps {
    templateCode: string;
    data: MyCvData;
}

const TemplateManager: React.FC<TemplateManagerProps> = ({
    templateCode,
    data
}) => {
    return (
        <div>
            <h1>{templateCode}</h1>
            <h1>{data.ownerDisplayName}</h1>
        </div>
    );
};

export default TemplateManager;