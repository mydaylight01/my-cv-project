import { Controller, Get, Route, Tags, Request, SuccessResponse, Response } from "tsoa";

interface HealthCheckResponse {
    status: string;
    message: string;
    timestamp: string;
}

@Route("health")
@Tags("Health Check")
export class HealthCheckController extends Controller {
    @Response<HealthCheckResponse>("200", "OK")
    @Get("/health-check")
    public async healthCheck(@Request() request: any): Promise<HealthCheckResponse> {
        return {
            status: "success",
            message: "OK",
            timestamp: new Date().toISOString(),
        };
    }
}