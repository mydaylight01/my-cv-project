import { apiConfigurations } from '../../ApiConfigurations';
import { HealthCheckApi } from '../../generated-api/apis/HealthCheckApi';

const healthCheckApi = new HealthCheckApi(apiConfigurations);

export const healthCheckService = {
    async healthCheck(): Promise<void> {
        try {
            // TODO: Add api interceptor to handle the request and response
            await healthCheckApi.healthCheck();
        } catch (error: unknown) {
            console.error('[error][healthCheck]', error);
            throw error;
        }
    },
}