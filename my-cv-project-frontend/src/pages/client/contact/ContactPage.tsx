import { useEffect, useState } from "react";

import TemplateManager from "../cv-templates/TemplateManager";

import { useLoading } from "../../../providers/providers/LoadingProvider";
import mockupApi from "../../../services/api/mockup.api";

import type { MyCvData } from "../../../services/model/mockup.model";

const ContactPage: React.FC = () => {
    const { showLoading, hideLoading } = useLoading();

    const [userCvData, setUserCvData] = useState<MyCvData | null>(null);

    useEffect(() => {
        const loadUserCvData = async () => {
            try {
                console.log("[ContactPage][loadUserCvData][Start]");
                showLoading();

                if (userCvData) {
                    console.log("[ContactPage][loadUserCvData] userCvData is already loaded");
                    return;
                }

                const userCvLoadResult = await mockupApi.previewCvByCvUuid({ cvUuid: "mydaylight" });
                console.log("[ContactPage][loadUserCvData] userCvLoadResult: ", userCvLoadResult);

                if (userCvLoadResult) {
                    setUserCvData(userCvLoadResult);
                }

                console.log("[ContactPage][loadUserCvData][End]");
            } catch (error: unknown) {
                console.error("[ContactPage][loadUserCvData][Error]", error);
                throw error;
            } finally {
                console.log("[ContactPage][loadUserCvData][End]");
                hideLoading();
            }
        }

        loadUserCvData();
    }, [userCvData])

    if (!userCvData) {
        return null;
    }
    return (
        <TemplateManager templateCode={userCvData.templateCode} data={userCvData} />
    );
};

export default ContactPage;