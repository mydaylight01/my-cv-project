
export const LANGUAGES: Record<string, string> = {
    THAI: "th",
    ENGLISH: "en",
};

export type LANGUAGES = typeof LANGUAGES[keyof typeof LANGUAGES];