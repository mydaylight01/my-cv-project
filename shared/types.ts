export type UserInfo = {
    uuid: string;
    userName: string;
    email: string;
    avatar: string; // Image Url
    role: string;
    language: string;
};

export type ROLES = "user" | "admin" | "moderator";