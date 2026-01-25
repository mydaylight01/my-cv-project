import { socialIcon, type SocialIcon } from "../../constants/social";

import {
    FaPhone,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaGlobe,
    FaMapMarkerAlt,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaTiktok,
    FaLine,
    FaTelegram
} from "react-icons/fa";

export const socialIconMap = (size: number = 20): Partial<Record<SocialIcon, React.ReactNode>> => {
    return {
        [socialIcon.telephone]: <FaPhone size={size} />,
        [socialIcon.envelope]: <FaEnvelope size={size} />,
        [socialIcon.github]: <FaGithub size={size} />,
        [socialIcon.linkedin]: <FaLinkedin size={size} />,
        [socialIcon.website]: <FaGlobe size={size} />,
        [socialIcon.address]: <FaMapMarkerAlt size={size} />,
        [socialIcon.facebook]: <FaFacebook size={size} />,
        [socialIcon.twitter]: <FaTwitter size={size} />,
        [socialIcon.instagram]: <FaInstagram size={size} />,
        [socialIcon.youtube]: <FaYoutube size={size} />,
        [socialIcon.tiktok]: <FaTiktok size={size} />,
        [socialIcon.line]: <FaLine size={size} />,
        [socialIcon.telegram]: <FaTelegram size={size} />,
    };
};