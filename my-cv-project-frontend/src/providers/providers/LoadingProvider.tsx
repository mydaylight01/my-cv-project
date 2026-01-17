import React, { useState } from 'react';
import LoadingContext from '../contexts/LoadingContext';

interface LoadingProviderProps {
    children: React.ReactNode;
}

const DEFAULT_LOADING_TIME_LIMIT_IN_SECONDS: number = 3;

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const calculateLoadingTimeout: number = DEFAULT_LOADING_TIME_LIMIT_IN_SECONDS * 1000;

    const showLoading = () => {
        console.log('[LoadingProvider] Force show Loading');
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, calculateLoadingTimeout);
    };

    const hideLoading = () => {
        console.log('[LoadingProvider] Force hide Loading');
        setIsLoading(false);
    };

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingProvider;
