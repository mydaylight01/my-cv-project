export const ErrorMessageController = (error: unknown): void => {
    switch (error) {
        case error instanceof Error:
            console.error('[ErrorMessageController] Error Normal: ', error);
            break;
        default:
            console.error('[ErrorMessageController] Error Default: ', error);
            break;
    }
}