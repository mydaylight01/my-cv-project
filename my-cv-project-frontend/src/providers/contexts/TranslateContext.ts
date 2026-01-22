import { createContext } from 'react';
import { LANGUAGES } from '../../constants/translate';
import type { TranslateParams } from '../providers/TranslateProvider';

export interface TranslateContextType {
    language: LANGUAGES;
    setLanguage: (language: LANGUAGES) => void;
    translate: (params: TranslateParams) => string;
}

const DEFAULT_LANGUAGE: LANGUAGES = LANGUAGES.ENGLISH;

const TranslateContext: React.Context<TranslateContextType> = createContext<TranslateContextType>({
    language: DEFAULT_LANGUAGE,
    setLanguage: () => { },
    translate: () => ''
});

export default TranslateContext;
