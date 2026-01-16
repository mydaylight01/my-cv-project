import { useMemo, useState } from "react";
import type { UserInfo } from "../../../../shared/types";
import AppAuthContext from "../contexts/AppAuthContext";

export interface AppAuthContextType {
    currentUserInfo: UserInfo | null;
    setCurrentUserInfo: (user: UserInfo | null) => void;
}

interface AppAuthProvierProps {
    children: React.ReactNode;
}

const AppAuthProvier: React.FC<AppAuthProvierProps> = ({ children }: AppAuthProvierProps) => {

    const [currentUserInfo, setCurrentUserInfo] = useState<UserInfo | null>(null);

    const value: AppAuthContextType = useMemo(() => ({
        currentUserInfo,
        setCurrentUserInfo: (userInfo: UserInfo | null) => setCurrentUserInfo(userInfo)
    }), [currentUserInfo]);

    return (
        <AppAuthContext.Provider value={value}>
            {children}
        </AppAuthContext.Provider>
    )
}

export default AppAuthProvier;
