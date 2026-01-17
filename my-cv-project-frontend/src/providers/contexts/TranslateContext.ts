import { createContext } from 'react';
import { LANGUAGES } from '../../constants/translate';

export interface TranslateParams {
    code: string;
    key: string;
}

export interface TranslateContextType {
    language: LANGUAGES;
    setLanguage: (language: LANGUAGES) => void;
    allLanguage: Record<string, string>;
    setAllLanguage: (allLanguage: Record<string, string>) => void;
    translate: (params: TranslateParams) => string;
}

const DEFAULT_LANGUAGE: LANGUAGES = LANGUAGES.ENGLISH;

const TranslateContext: React.Context<TranslateContextType> = createContext<TranslateContextType>({
    language: DEFAULT_LANGUAGE,
    setLanguage: () => { },
    allLanguage: {},
    setAllLanguage: () => { },
    translate: () => ''
});

export default TranslateContext;
