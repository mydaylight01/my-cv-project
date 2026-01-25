export const socialIcon = {
    telephone: "telephone",
    envelope: "envelope",
    github: "github",
    linkedin: "linkedin",
    website: "website",
    address: "address",
    facebook: "facebook",
    twitter: "twitter",
    instagram: "instagram",
    youtube: "youtube",
    tiktok: "tiktok",
    line: "line",
    telegram: "telegram",
};

export type SocialIcon = typeof socialIcon[keyof typeof socialIcon];