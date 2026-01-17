export const ROLES: Record<string, string> = {
    USER: "user",
    ADMIN: "admin",
    MODERATOR: "moderator"
};

export type ROLES = typeof ROLES[keyof typeof ROLES];