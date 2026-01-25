import React, { useCallback, useRef, useState } from 'react';

import LoadingContext from '../contexts/LoadingContext';

interface LoadingProviderProps {
    children: React.ReactNode;
}

const DEFAULT_LOADING_TIME_LIMIT_IN_SECONDS: number = 3 * 1000;

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const loadingKeys = useRef<string[]>([]);

    const loadingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showLoading = useCallback(() => {
        const loadingKey = Date.now().toString();
        try {
            console.log('[LoadingProvider][showLoading] Force show Loading', loadingKey);
            setIsLoading(true);
            loadingKeys.current.push(loadingKey);

            const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
                loadingKeys.current = loadingKeys.current.filter((key) => key !== loadingKey);

                if (loadingKeys.current.length === 0) {
                    setIsLoading(false);
                }
            }, DEFAULT_LOADING_TIME_LIMIT_IN_SECONDS);

            loadingTimeoutRef.current = timeout;

        } catch (error: unknown) {
            console.error("[LoadingProvider][showLoading][Error]", error);
            throw error;
        }
    }, []);

    const hideLoading = useCallback(() => {
        console.log('[LoadingProvider][hideLoading] Force hide Loading');

        if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
            loadingKeys.current = [];
        }

        setIsLoading(false);
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingProvider;
