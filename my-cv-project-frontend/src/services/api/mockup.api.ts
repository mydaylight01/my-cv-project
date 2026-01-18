import type { MyCvData } from "../model/mockup.model";

import { findCvByUuid } from "../local-data";

export const previewCvByCvUuid = (request: { cvUuid: string }): Promise<MyCvData | undefined> => {
    return new Promise<MyCvData | undefined>((resolve) => {
        const response = findCvByUuid(request.cvUuid);
        resolve(response);
    });
};