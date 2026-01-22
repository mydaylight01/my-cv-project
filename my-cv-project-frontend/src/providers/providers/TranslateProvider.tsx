// External Libraries (React first)
import React, { useState } from 'react';

// Local Providers / Hooks / Contexts
import TranslateContext from '../contexts/TranslateContext';
import { useAppAuthHook } from '../hooks/useAppAuth';
import { LANGUAGES } from '../../constants/translate';

// Utils
import { ErrorMessageController } from '../../utils/ErrorMessageController';

export interface TranslateDictionary {
    [language: LANGUAGES]: {
        [code: string]: {
            [key: string]: string;
        };
    };
}

export interface TranslateParams {
    group: string;
    key: string;
}

interface TranslateProviderProps {
    children: React.ReactNode;
}

const DEFAULT_LANGUAGE: LANGUAGES = LANGUAGES.THAI;

const TranslateProvider: React.FC<TranslateProviderProps> = ({ children }: TranslateProviderProps) => {
    const { currentUserInfo } = useAppAuthHook();

    const [language, setLanguage] = useState<LANGUAGES>(currentUserInfo?.language as LANGUAGES || DEFAULT_LANGUAGE);
    const [dictionary, setDictionary] = useState<TranslateDictionary>({});

    const findTranslateDescription = async (params: TranslateParams): Promise<string> => {
        const { group, key }: TranslateParams = params;

        //Error Output
        const errorTranslate: string = `${language}.${group}.${key}`;
        try {
            const queryTranslate = await fetch(`http://localhost:8080/api/translate/${language}/${group}`).then((res) => res.json());

            //Check if query translate exists
            const isQueryTranslateExists: boolean = queryTranslate !== undefined;

            if (isQueryTranslateExists) {
                setDictionary((prevDictionary: TranslateDictionary) => ({
                    ...prevDictionary,
                    [language]: {
                        ...prevDictionary[language],
                        [group]: {
                            ...prevDictionary[language][group],
                            ...queryTranslate[language][group]
                        }
                    }
                }));
                return queryTranslate[language][group][key];
            }

            console.warn('[TranslateProvider] Not Found:', `${language}.${group}.${key}`);
            return errorTranslate;
        } catch (error: unknown) {
            ErrorMessageController("TranslateProvider", "findTranslateDescription", error);
            return errorTranslate;
        }
    }

    const translate = (params: TranslateParams): string => {
        try {
            const { group, key }: TranslateParams = params;

            const output: string = dictionary[language]?.[group]?.[key] ?? findTranslateDescription(params);
            return output;
        } catch (error: unknown) {
            ErrorMessageController("TranslateProvider", "translate", error);
            return '';
        }
    }

    return (
        <TranslateContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </TranslateContext.Provider>
    );
};

export default TranslateProvider;
