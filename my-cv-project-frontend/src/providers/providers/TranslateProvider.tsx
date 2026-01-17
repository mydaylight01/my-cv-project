import React, { useState } from 'react';

import TranslateContext, { type TranslateParams } from '../contexts/TranslateContext';
import { useAppAuthHook } from '../hooks/useAppAuth';

import { LANGUAGES } from '../../../../shared/constants';

interface TranslateProviderProps {
    children: React.ReactNode;
}

const DEFAULT_LANGUAGE: LANGUAGES = LANGUAGES.THAI;

const TranslateProvider: React.FC<TranslateProviderProps> = ({ children }: TranslateProviderProps) => {
    const { currentUserInfo } = useAppAuthHook();

    const [language, setLanguage] = useState<LANGUAGES>(currentUserInfo?.language as LANGUAGES || DEFAULT_LANGUAGE);
    const [allLanguage, setAllLanguage] = useState<Record<LANGUAGES, string>>({});

    const translate = (params: TranslateParams): string => {
        const { code, key }: TranslateParams = params;
        const output: string = `${language}.${code}.${key}`;
        return output;
    }

    return (
        <TranslateContext.Provider value={{ language, setLanguage, allLanguage, setAllLanguage, translate }}>
            {children}
        </TranslateContext.Provider>
    );
};

export default TranslateProvider;
