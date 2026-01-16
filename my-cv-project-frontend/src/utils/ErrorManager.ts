export const ErrorManager = (error: unknown) => {
    switch (error) {
        case error instanceof Error:
            console.error('[ErrorManager] Error Normal: ', error);
            break;
        default:
            console.error('[ErrorManager] Error Default: ', error);
            break;
    }
}