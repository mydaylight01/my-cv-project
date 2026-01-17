import { createContext } from 'react';

export interface LoadingContextType {
    isLoading: boolean;
    showLoading: () => void;
    hideLoading: () => void;
}

const LoadingContext: React.Context<LoadingContextType> = createContext<LoadingContextType>({
    isLoading: false,
    showLoading: () => { },
    hideLoading: () => { }
});

export default LoadingContext;
