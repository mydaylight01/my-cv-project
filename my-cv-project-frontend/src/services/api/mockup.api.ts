import type { MyCvData } from "../model/mockup.model";

import { findCvByUuid } from "../local-data";

const previewCvByCvUuid = (request: { cvUuid: string }): Promise<MyCvData | undefined> => {
    return new Promise<MyCvData | undefined>((resolve) => {
        const response = findCvByUuid(request.cvUuid);
        resolve(response);
    });
};

const mockupApi = {
    previewCvByCvUuid
};

export default mockupApi;