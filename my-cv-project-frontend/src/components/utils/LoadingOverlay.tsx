import React from 'react';
import { useLoading } from '../../providers/hooks/useLoading';

const LoadingOverlay: React.FC = () => {
    const { isLoading } = useLoading();

    const loadingTextWithDelay = (delay: number): string => {
        // animation-delay value should be negative value because animate-bounce will start immediately without waiting.
        // closer the delay value to -1, the faster the animation will start.
        const output: string = `text-white font-bold text-2xl rounded-full animate-bounce [animation-delay:-${delay}s]`;
        return output;
    };

    if (!isLoading) return null;
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md transition-all duration-500">
            <div className="w-60 h-60 border-r-2 border-t-5 border-indigo-300/60 blur-[1px] rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>

            <div className="absolute inset-0 flex items-center justify-center space-x-1">
                <div className={loadingTextWithDelay(0.9)}>L</div>
                <div className={loadingTextWithDelay(0.75)}>o</div>
                <div className={loadingTextWithDelay(0.6)}>a</div>
                <div className={loadingTextWithDelay(0.45)}>d</div>
                <div className={loadingTextWithDelay(0.3)}>i</div>
                <div className={loadingTextWithDelay(0.15)}>n</div>
                <div className={loadingTextWithDelay(0)}>g</div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
