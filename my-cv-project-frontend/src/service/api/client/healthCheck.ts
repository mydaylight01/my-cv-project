import { apiConfigurations } from '../../ApiConfigurations';
import { HealthCheckApi } from '../../generated-api/apis/HealthCheckApi';
import type { HealthCheckResponse } from '../../generated-api/models/HealthCheckResponse';

const healthCheckApi = new HealthCheckApi(apiConfigurations);

export const healthCheckService = {
    async healthCheck(): Promise<HealthCheckResponse> {
        try {
            // TODO: Add api interceptor to handle the request and response
            return await healthCheckApi.healthCheck();
        } catch (error: unknown) {
            console.error('[error][healthCheck]', error);
            throw error;
        }
    },
}