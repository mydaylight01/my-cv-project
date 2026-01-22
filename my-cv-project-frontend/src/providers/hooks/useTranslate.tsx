import { useContext } from 'react';
import TranslateContext from '../contexts/TranslateContext';
import type { TranslateContextType } from '../contexts/TranslateContext';

export const useTranslate = (): TranslateContextType => {
    const context: TranslateContextType | undefined = useContext(TranslateContext);
    if (context === undefined) {
        throw new Error('useTranslate must be used within a TranslateProvider');
    }
    return context;
};