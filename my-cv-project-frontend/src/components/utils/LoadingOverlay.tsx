import React from 'react';
import { useLoading } from '../../providers/hooks/useLoading';

const LoadingOverlay: React.FC = () => {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    const styles: Record<string, string> = {
        screen: `fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md transition-all duration-200`,
        loadingSpinner: `w-60 h-60 border-r-2 border-t-5 border-indigo-300/60 blur-[1px] rounded-full animate-[spin_1.5s_linear_infinite_reverse]`,
        loadingTextGroup: `absolute inset-0 flex items-center justify-center space-x-1`,
    };

    const loadingTextWithDelay = (delay: number): string => {
        const output: string = `text-white font-mono font-bold text-2xl rounded-full animate-bounce [animation-delay:${delay}s]`
        return output;
    };

    return (
        <div className={styles.screen}>
            <div className={styles.loadingSpinner}></div>

            <div className={styles.loadingTextGroup}>
                <div className={loadingTextWithDelay(0)}>L</div>
                <div className={loadingTextWithDelay(0.15)}>o</div>
                <div className={loadingTextWithDelay(0.3)}>a</div>
                <div className={loadingTextWithDelay(0.45)}>d</div>
                <div className={loadingTextWithDelay(0.6)}>i</div>
                <div className={loadingTextWithDelay(0.75)}>n</div>
                <div className={loadingTextWithDelay(0.9)}>g</div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
