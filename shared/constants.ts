export const ROLES: Record<string, string> = {
    USER: "user",
    ADMIN: "admin",
    MODERATOR: "moderator"
};

export type ROLES = typeof ROLES[keyof typeof ROLES];

export const LANGUAGES: Record<string, string> = {
    THAI: "th",
    ENGLISH: "en",
};

export type LANGUAGES = typeof LANGUAGES[keyof typeof LANGUAGES];