export const ErrorMessageController = (functionName: string, method: string, error: unknown): void => {
    switch (error) {
        case error instanceof Error:
            console.error(`[${functionName}][${method}] Error : `, error);
            break;
        default:
            console.error(`[${functionName}][${method}] Error : `, error);
            break;
    }
}