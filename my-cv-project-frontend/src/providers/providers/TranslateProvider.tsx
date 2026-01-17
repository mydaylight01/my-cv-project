// External Libraries (React first)
import React, { useState } from 'react';

// Local Providers / Hooks / Contexts
import TranslateContext, { type TranslateParams } from '../contexts/TranslateContext';
import { useAppAuthHook } from '../hooks/useAppAuth';
import { LANGUAGES } from '../../constants/translate';

// Utils
import { ErrorMessageController } from '../../utils/ErrorMessageController';

interface TranslateDictionary {
    [language: LANGUAGES]: {
        [code: string]: {
            [key: string]: string;
        };
    };
}

interface TranslateProviderProps {
    children: React.ReactNode;
}

const DEFAULT_LANGUAGE: LANGUAGES = LANGUAGES.THAI;

const TranslateProvider: React.FC<TranslateProviderProps> = ({ children }: TranslateProviderProps) => {
    const { currentUserInfo } = useAppAuthHook();

    const [language, setLanguage] = useState<LANGUAGES>(currentUserInfo?.language as LANGUAGES || DEFAULT_LANGUAGE);
    const [allLanguage, setAllLanguage] = useState<Record<LANGUAGES, string>>({});
    const [dictionary, setDictionary] = useState<TranslateDictionary>({});

    const translate = (params: TranslateParams): string => {
        try {
            const { code, key }: TranslateParams = params;

            const output: string = dictionary[language]?.[code]?.[key] ?? findTranslateDescription(params);
            return output;
        } catch (error: unknown) {
            ErrorMessageController(error);
            return '';
        }
    }

    const findTranslateDescription = async (params: TranslateParams): Promise<string> => {
        const { code, key }: TranslateParams = params;

        //Error Output
        const errorTranslate: string = `${language}.${code}.${key}`;
        try {
            const queryTranslate = await fetch(`http://localhost:3000/api/translate/${language}/${code}`).then((res) => res.json());

            //Check if query translate exists
            const isQueryTranslateExists: boolean = queryTranslate !== undefined;

            if (isQueryTranslateExists) {
                setDictionary((prevDictionary: TranslateDictionary) => ({
                    ...prevDictionary,
                    [language]: {
                        ...prevDictionary[language],
                        [code]: {
                            ...prevDictionary[language][code],
                            ...queryTranslate[language][code]
                        }
                    }
                }));
                return queryTranslate[language][code][key];
            }

            console.warn('[TranslateProvider] Not Found:', `${language}.${code}.${key}`);
            return errorTranslate;
        } catch (error: unknown) {
            ErrorMessageController(error);
            return errorTranslate;
        }
    }

    return (
        <TranslateContext.Provider value={{ language, setLanguage, allLanguage, setAllLanguage, translate }}>
            {children}
        </TranslateContext.Provider>
    );
};

export default TranslateProvider;
